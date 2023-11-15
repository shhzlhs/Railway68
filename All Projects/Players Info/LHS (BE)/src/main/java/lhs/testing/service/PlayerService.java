package lhs.testing.service;

import lhs.testing.entity.Player;
import lhs.testing.form.player.CreatePlayerForm;
import lhs.testing.form.player.PlayerFilterForm;
import lhs.testing.form.player.UpdatePlayerForm;
import lhs.testing.repository.IPlayerRepository;
import lhs.testing.specification.PlayerSpecification;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlayerService implements IPlayerService {
    @Autowired
    private IPlayerRepository playerRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<Player> getAllPlayers(PlayerFilterForm form) {
        Specification<Player> where = PlayerSpecification.buildWhere(form);
        return playerRepository.findAll(where);
    }

    @Override
    public List<Player> getByTeams(List<Integer> ids) {
        List<Player> allPlayers = new ArrayList<>();
        ids.forEach(id -> {
            List<Player> players = playerRepository.findAllByTeamId(id);
            allPlayers.addAll(players);
        });
        return allPlayers;
    }

    @Override
    public List<Player> getByIds(List<Integer> ids) {
        Iterable<Integer> idIterable = ids;
        return playerRepository.findAllById(ids);
    }

    @Override
    public void createPlayer(CreatePlayerForm form) {
        TypeMap<CreatePlayerForm, Player> typeMap = modelMapper.getTypeMap(CreatePlayerForm.class, Player.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatePlayerForm, Player>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Player player = modelMapper.map(form, Player.class);
        System.out.println("Team: " + player.getTeam());
        playerRepository.save(player);
        player.setAvatar("player_" + player.getId() + ".png");
        playerRepository.save(player);
    }

    @Override
    public void updatePlayer(UpdatePlayerForm form) {
        Player player = modelMapper.map(form, Player.class);
        player.setAvatar("player_" + player.getId() + ".png");
        playerRepository.save(player);
    }

    @Override
    public void deletePlayer(int id) {
        playerRepository.deleteById(id);
    }

    @Override
    public void deletePlayers(List<Integer> ids) {
        playerRepository.deleteAllById(ids);
    }

}


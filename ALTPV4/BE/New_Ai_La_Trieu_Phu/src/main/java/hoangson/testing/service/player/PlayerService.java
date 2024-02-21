package hoangson.testing.service.player;

import hoangson.testing.entity.Player;
import hoangson.testing.form.player.CreatePlayerForm;
import hoangson.testing.repository.IPlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService implements IPlayerService {
    @Autowired
    IPlayerRepository playerRepository;

    @Override
    public Player createPlayer(CreatePlayerForm form) {
        Player player = new Player();
        player.setName(form.getName());
        player.setAvatar(form.getAvatar());
        player.setLevel(form.getLevel());
        playerRepository.save(player);
        return player;
    }

    @Override
    public void changeAvatar(int playerId, String avatar) {
        Player player = playerRepository.findById(playerId);
        player.setAvatar(avatar);
        playerRepository.save(player);
    }

    @Override
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }
}

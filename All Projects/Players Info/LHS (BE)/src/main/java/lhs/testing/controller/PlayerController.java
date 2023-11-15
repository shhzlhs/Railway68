package lhs.testing.controller;

import lhs.testing.dto.PlayerDTO;
import lhs.testing.entity.Player;
import lhs.testing.form.player.CreatePlayerForm;
import lhs.testing.form.player.PlayerFilterForm;
import lhs.testing.form.player.UpdatePlayerForm;
import lhs.testing.service.IPlayerService;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.modelmapper.ModelMapper;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/players")
public class PlayerController {
    @Autowired
    private IPlayerService playerService;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<PlayerDTO> getAllPlayers(PlayerFilterForm form) {
        List<Player> players = playerService.getAllPlayers(form);
        List<PlayerDTO> playerDTOS = modelMapper.map(players, new TypeToken<List<PlayerDTO>>() {
        }.getType());
        return playerDTOS;
    }

    @GetMapping(value = "/ids/{ids}")
    public List<PlayerDTO> getByIds(@PathVariable List<Integer> ids) {
        List<Player> players = playerService.getByIds(ids);
        List<PlayerDTO> playerDTOS = modelMapper.map(players, new TypeToken<List<PlayerDTO>>() {
        }.getType());
        return playerDTOS;
    }

    @GetMapping(value = "/{teamIds}")
    public List<PlayerDTO> getByTeams(@PathVariable List<Integer> teamIds) {
        List<Player> players = playerService.getByTeams(teamIds);
        List<PlayerDTO> playerDTOS = modelMapper.map(players, new TypeToken<List<PlayerDTO>>() {
        }.getType());
        return playerDTOS;
    }

    @PostMapping
    public void createPlayer(@RequestBody CreatePlayerForm form) {
        playerService.createPlayer(form);
    }

    @PutMapping(value = "/{id}")
    public void updatePlayer(@PathVariable(name = "id") int id, @RequestBody @Valid UpdatePlayerForm form) {
        form.setId(id);
        playerService.updatePlayer(form);
    }

    @DeleteMapping(value = "/{ids}")
    public void deletePlayers(@PathVariable(name = "ids") List<Integer> ids) {
        playerService.deletePlayers(ids);
    }

}

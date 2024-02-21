package hoangson.testing.controller;

import hoangson.testing.dto.PlayerDTO;
import hoangson.testing.dto.SimpleLevel;
import hoangson.testing.form.player.CreatePlayerForm;
import hoangson.testing.service.player.IPlayerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/players")
public class PlayerController {

    @Autowired
    IPlayerService playerService;
    @Autowired
    ModelMapper modelMapper;

    @PostMapping
    public PlayerDTO createPlayer(@RequestBody CreatePlayerForm form) {
        return modelMapper.map(playerService.createPlayer(form), PlayerDTO.class);
    }

    @PutMapping(value = "/{id}/{avatar}")
    public void changeAvatar(@PathVariable int id, @PathVariable String avatar) {
        playerService.changeAvatar(id, avatar);
    }

    @GetMapping
    public List<PlayerDTO> getAllPlayers() {
        return modelMapper.map(playerService.getAllPlayers(), new TypeToken<List<PlayerDTO>>() {
        }.getType());
    }
}

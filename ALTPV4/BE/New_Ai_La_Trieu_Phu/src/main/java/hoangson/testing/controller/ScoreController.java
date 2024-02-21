package hoangson.testing.controller;

import hoangson.testing.dto.ScoreDTO;
import hoangson.testing.form.player.PlayForm;
import hoangson.testing.service.score.IScoreService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/scores")
public class ScoreController {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IScoreService scoreService;

    @PostMapping
    public ScoreDTO play(@RequestBody PlayForm form) {
        return modelMapper.map(scoreService.played(form), ScoreDTO.class);
    }
}

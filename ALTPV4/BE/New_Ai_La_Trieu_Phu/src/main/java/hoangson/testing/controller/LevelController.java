package hoangson.testing.controller;

import hoangson.testing.dto.SimpleLevel;
import hoangson.testing.entity.Level;
import hoangson.testing.service.level.ILevelService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/levels")
public class LevelController {

    @Autowired
    ILevelService levelService;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping
    public List<SimpleLevel> getAllLevels() {
        List<Level> levels = levelService.getAllLevels();
        return modelMapper.map(levels, new TypeToken<List<SimpleLevel>>() {
        }.getType());
    }
}

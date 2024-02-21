package hoangson.testing.controller;

import hoangson.testing.dto.AnswerDTO;
import hoangson.testing.form.answer.UpdateAnswerForm;
import hoangson.testing.service.answer.IAnswerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/answers")
public class AnswerController {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IAnswerService answerService;

    @PutMapping(value = "/{id}")
    public AnswerDTO updateAnswer(@PathVariable int id, @RequestBody UpdateAnswerForm form) {
        return modelMapper.map(answerService.updateAnswer(id, form), AnswerDTO.class);
    }
}

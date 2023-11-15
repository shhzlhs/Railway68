package lhs.testing.controller;

import lhs.testing.DTO.AnswerDTO;
import lhs.testing.entity.Answer;
import lhs.testing.form.answer.AddAnswerForm;
import lhs.testing.form.answer.UpdateAnswerForm;
import lhs.testing.form.question.AddQuestionForm;
import lhs.testing.service.IAnswerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/v1/answers")
public class AnswerController {

    @Autowired
    IAnswerService answerService;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping
    public List<AnswerDTO> getAllAnswers() {
        List<Answer> answers = answerService.getAllAnswers();
        List<AnswerDTO> answerDTOS = modelMapper.map(answers, new TypeToken<List<AnswerDTO>>() {
        }.getType());
        return answerDTOS;
    }

    @GetMapping(value = "/{id}")
    public List<AnswerDTO> getAnswersByQuestionId(@PathVariable int id) {
        List<Answer> answers = answerService.getAnswersByQuestionId(id);
        List<AnswerDTO> answerDTOS = modelMapper.map(answers, new TypeToken<List<AnswerDTO>>() {
        }.getType());
        return answerDTOS;
    }

    @PostMapping
    public void addAnswer(@RequestBody AddAnswerForm form) {
        answerService.addAnswer(form);
    }

    @PutMapping(value = "/{id}")
    public void editAnswer(@RequestBody UpdateAnswerForm form, @PathVariable int id) {
        {
            form.setId(id);
            answerService.updateAnswer(form);
        }
    }

    @DeleteMapping(value = "/{ids}")
    public void deleteAnswers(@PathVariable List<Integer> ids) {
        answerService.deleteAnswers(ids);
    }
}

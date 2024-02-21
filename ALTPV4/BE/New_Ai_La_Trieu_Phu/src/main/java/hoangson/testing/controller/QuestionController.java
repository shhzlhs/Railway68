package hoangson.testing.controller;

import hoangson.testing.dto.QuestionDTO;
import hoangson.testing.dto.SimpleLevel;
import hoangson.testing.entity.Level;
import hoangson.testing.entity.Question;
import hoangson.testing.form.question.AddQuestionForm;
import hoangson.testing.form.question.UpdateQuestionForm;
import hoangson.testing.service.question.IQuestionService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/questions")
public class QuestionController {

    @Autowired
    IQuestionService questionService;
    @Autowired
    ModelMapper modelMapper;

    @PostMapping
    public QuestionDTO AddQuestion(@RequestBody AddQuestionForm form) {
        return modelMapper.map(questionService.addQuestion(form), QuestionDTO.class);
    }

    @GetMapping
    public List<QuestionDTO> getAllQuestions() {
        List<Question> questions = questionService.getAllQuestions();
        return modelMapper.map(questions, new TypeToken<List<QuestionDTO>>() {
        }.getType());
    }

    @PutMapping(value = "/{id}")
    public QuestionDTO updateQuestion(@PathVariable int id, @RequestBody UpdateQuestionForm form) {
        return modelMapper.map(questionService.updateQuestion(id, form), QuestionDTO.class);
    }

    @DeleteMapping(value = "/{ids}")
    public void deleteQuestions(@PathVariable List<Integer> ids) {
        questionService.deleteQuestions(ids);
    }

    @PutMapping(value = "/notNull")
    public void setImageToDefault() {
        questionService.setImageToDefault();
    }
}

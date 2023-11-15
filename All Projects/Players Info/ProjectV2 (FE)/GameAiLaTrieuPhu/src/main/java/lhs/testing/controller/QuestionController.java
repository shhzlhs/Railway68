package lhs.testing.controller;

import lhs.testing.DTO.QuestionDTO;
import lhs.testing.entity.Question;
import lhs.testing.form.question.AddQuestionForm;
import lhs.testing.form.question.UpdateQuestionForm;
import lhs.testing.service.IQuestionService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/questions")
public class QuestionController {

    @Autowired
    IQuestionService questionService;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping
    public List<QuestionDTO> getAllTeams() {
        List<Question> questions = questionService.getAllQuestions();
        List<QuestionDTO> questionDTOS = modelMapper.map(questions, new TypeToken<List<QuestionDTO>>() {
        }.getType());
        return questionDTOS;
    }

    @GetMapping(value = "/id/{id}")
    public QuestionDTO getQuestionById(@PathVariable int id) {
        Question question = questionService.getQuestionById(id);
        return modelMapper.map(question, QuestionDTO.class);
    }

    @GetMapping(value = "/{number}")

    public List<QuestionDTO> getQuestionByNumber(@PathVariable int number) {
        List<Question> questions = questionService.getQuestionsByNumber(number);
        List<QuestionDTO> questionDTOS = modelMapper.map(questions, new TypeToken<List<QuestionDTO>>() {
        }.getType());
        return questionDTOS;
    }

    @PostMapping
    public void addQuestion(@RequestBody AddQuestionForm form) {
        questionService.addQuestion(form);
    }

    @PutMapping(value = "/{id}")
    public void updateQuestion(@PathVariable(name = "id") int id, @RequestBody UpdateQuestionForm form) {
        form.setId(id);
        questionService.upDateQuestion(form);
    }

    @DeleteMapping(value = "/{ids}")
    public void deleteQuestions(@PathVariable List<Integer> ids) {
        questionService.deleteQuestion(ids);
    }
}

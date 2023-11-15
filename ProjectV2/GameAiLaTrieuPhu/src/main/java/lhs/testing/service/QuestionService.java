package lhs.testing.service;

import lhs.testing.entity.Answer;
import lhs.testing.entity.Question;
import lhs.testing.form.question.AddQuestionForm;
import lhs.testing.form.question.UpdateQuestionForm;
import lhs.testing.repository.IAnswerRepository;
import lhs.testing.repository.IQuestionRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService implements IQuestionService {
    @Autowired
    IQuestionRepository questionRepository;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IAnswerRepository answerRepository;

    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public List<Question> getQuestionsByNumber(int number) {
        return questionRepository.findAllByNumber(number);
    }

    @Override
    public void addQuestion(AddQuestionForm form) {
        TypeMap<AddQuestionForm, Question> typeMap = modelMapper.getTypeMap(AddQuestionForm.class, Question.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<AddQuestionForm, Question>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Question question = modelMapper.map(form, Question.class);
        questionRepository.save(question);
        List<Answer> answers = question.getAnswers();
        answers.forEach(answer -> {
            answer.setQuestion(question);
        });
        answerRepository.saveAll(answers);
    }

    @Override
    public void deleteQuestion(List<Integer> ids) {
        questionRepository.deleteAllById(ids);
    }

    @Override
    public void upDateQuestion(UpdateQuestionForm form) {
        Question question = modelMapper.map(form, Question.class);
        questionRepository.save(question);
    }

    @Override
    public Question getQuestionById(int id) {
        return questionRepository.findById(id);
    }
}

package hoangson.testing.service.question;

import hoangson.testing.entity.Answer;
import hoangson.testing.entity.Question;
import hoangson.testing.entity.QuestionLevel;
import hoangson.testing.form.question.AddQuestionForm;
import hoangson.testing.form.question.UpdateQuestionForm;
import hoangson.testing.repository.IAnswerRepository;
import hoangson.testing.repository.ILevelRepository;
import hoangson.testing.repository.IQuestionLevelRepository;
import hoangson.testing.repository.IQuestionRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService implements IQuestionService {
    @Autowired
    IQuestionRepository questionRepository;
    @Autowired
    IAnswerRepository answerRepository;

    @Autowired
    IQuestionLevelRepository questionLevelRepository;

    @Autowired
    ILevelRepository levelRepository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public Question addQuestion(AddQuestionForm form) {

        Question question = new Question();
        question.setNumber(form.getNumber());
        question.setContent(form.getContent());
        List<Answer> answers = modelMapper.map(form.getAnswers(), new TypeToken<List<Answer>>() {
        }.getType());
        question.setAnswers(answers);
        questionRepository.save(question);
        for (Answer answer : answers) {
            answer.setQuestion(question);
        }
        answerRepository.saveAll(answers);
        for (int level : form.getLevels()) {
            QuestionLevel questionLevel = new QuestionLevel();
            questionLevel.setQuestion(question);
            questionLevel.setLevel(levelRepository.findById(level));
            question.setImage(form.getImage());
            questionLevelRepository.save(questionLevel);
        }
        question.setLevels(levelRepository.findAllById(form.getLevels()));
        return question;
    }

    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public Question updateQuestion(int id, UpdateQuestionForm form) {
        Question question = questionRepository.findById(id);
        question.setContent(form.getContent());
        questionRepository.save(question);
        return question;
    }

    @Override
    public void deleteQuestions(List<Integer> ids) {
        questionRepository.deleteAllById(ids);
    }

    @Override
    public void setImageToDefault() {
        List<Question> questions = questionRepository.findAllByImage("");
        for (Question question : questions) {
            question.setImage("image0.png");
        }
        questionRepository.saveAll(questions);
    }
}

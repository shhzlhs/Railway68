package lhs.testing.service;

import lhs.testing.entity.Answer;
import lhs.testing.form.answer.AddAnswerForm;
import lhs.testing.form.answer.UpdateAnswerForm;
import lhs.testing.repository.IAnswerRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService implements IAnswerService {
    @Autowired
    IAnswerRepository answerRepository;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    @Override
    public List<Answer> getAnswersByQuestionId(int id) {
        return answerRepository.findAllByQuestionId(id);
    }

    @Override
    public void addAnswer(AddAnswerForm form) {
        TypeMap<AddAnswerForm, Answer> typeMap = modelMapper.getTypeMap(AddAnswerForm.class, Answer.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<AddAnswerForm, Answer>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Answer answer = modelMapper.map(form, Answer.class);
        answerRepository.save(answer);
    }

    @Override
    public void updateAnswer(UpdateAnswerForm form) {
        Answer answer = modelMapper.map(form, Answer.class);
        answerRepository.save(answer);
    }

    @Override
    public void deleteAnswers(List<Integer> ids) {
        answerRepository.deleteAllById(ids);

    }
}

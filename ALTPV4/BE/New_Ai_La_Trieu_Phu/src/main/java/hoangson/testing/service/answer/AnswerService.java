package hoangson.testing.service.answer;

import hoangson.testing.entity.Answer;
import hoangson.testing.form.answer.UpdateAnswerForm;
import hoangson.testing.repository.IAnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerService implements IAnswerService {
    @Autowired
    IAnswerRepository answerRepository;

    @Override
    public Answer updateAnswer(int id, UpdateAnswerForm form) {
        Answer answer = answerRepository.findById(id);
        answer.setContent(form.getContent());
        answerRepository.save(answer);
        return answer;
    }
}

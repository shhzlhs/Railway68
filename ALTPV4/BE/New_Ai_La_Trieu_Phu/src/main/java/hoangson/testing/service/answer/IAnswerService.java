package hoangson.testing.service.answer;

import hoangson.testing.entity.Answer;
import hoangson.testing.form.answer.UpdateAnswerForm;

public interface IAnswerService {
    Answer updateAnswer(int id, UpdateAnswerForm form);
}

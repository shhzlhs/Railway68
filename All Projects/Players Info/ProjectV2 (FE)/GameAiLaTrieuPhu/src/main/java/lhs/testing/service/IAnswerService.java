package lhs.testing.service;

import lhs.testing.entity.Answer;
import lhs.testing.form.answer.AddAnswerForm;
import lhs.testing.form.answer.UpdateAnswerForm;

import java.util.List;

public interface IAnswerService {

    List<Answer> getAllAnswers();
    List<Answer> getAnswersByQuestionId(int id);

    void addAnswer (AddAnswerForm form);

    void updateAnswer(UpdateAnswerForm form);

    void deleteAnswers(List<Integer> ids);

}

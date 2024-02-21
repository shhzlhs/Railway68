package hoangson.testing.service.question;

import hoangson.testing.entity.Question;
import hoangson.testing.form.question.AddQuestionForm;
import hoangson.testing.form.question.UpdateQuestionForm;

import java.util.List;

public interface IQuestionService {

    Question addQuestion(AddQuestionForm form);

    List<Question> getAllQuestions();

    Question updateQuestion(int id, UpdateQuestionForm form);

    void deleteQuestions(List<Integer> ids);

    void setImageToDefault();
}

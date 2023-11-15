package lhs.testing.service;

import lhs.testing.entity.Question;
import lhs.testing.form.question.AddQuestionForm;
import lhs.testing.form.question.UpdateQuestionForm;

import java.util.List;
import java.util.Optional;

public interface IQuestionService {
    List<Question> getAllQuestions();
    List<Question> getQuestionsByNumber (int number);

    void addQuestion(AddQuestionForm form);
    void deleteQuestion (List<Integer> ids);
    void upDateQuestion (UpdateQuestionForm form);
    Question getQuestionById (int id);
}

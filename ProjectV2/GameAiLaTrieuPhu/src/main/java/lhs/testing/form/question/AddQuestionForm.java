package lhs.testing.form.question;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class AddQuestionForm {

    private int id;

    private String content;

    private int number;

    private List<Answer> answers;

    @Data
    @NoArgsConstructor
    public static class Answer {

        private String content;

        private String isTrue;
    }
}

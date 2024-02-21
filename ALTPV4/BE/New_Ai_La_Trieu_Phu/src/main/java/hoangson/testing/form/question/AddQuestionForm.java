package hoangson.testing.form.question;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class AddQuestionForm {

    private String content;

    private List<Integer> levels;

    private int number;

    private String image;

    private List<Answer> answers;

    @NoArgsConstructor
    @Data
    public static class Answer {

        private String content;

        private String isTrue;
    }
}

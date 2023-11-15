package lhs.testing.form.question;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateQuestionForm {

    private int id;

    private String content;

    private int number;
}

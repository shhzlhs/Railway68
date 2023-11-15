package lhs.testing.form.answer;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateAnswerForm {

    private int id;

    private String content;

    private int questionId;

    private String isTrue;
}

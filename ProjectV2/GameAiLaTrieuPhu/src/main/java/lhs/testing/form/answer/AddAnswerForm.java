package lhs.testing.form.answer;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AddAnswerForm {

    private int id;

    private String content;

    private String isTrue;

    private int questionId;
}

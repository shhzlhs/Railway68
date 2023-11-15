package lhs.testing.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AnswerDTO {

    private int id;

    private String content;

    private String isTrue;

    private String questionContent;
}

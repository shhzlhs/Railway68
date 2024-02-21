package hoangson.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AnswerDTO {
    private int id;
    private String content;
    private String isTrue;
}

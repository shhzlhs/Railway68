package lhs.testing.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class QuestionDTO {

    private int id;

    private String content;

    private int number;

    private List<AnswerDTO> answers;

    @Data
    @NoArgsConstructor
    static class AnswerDTO{

        private int id;

        private String content;

        private String isTrue;
    }


}

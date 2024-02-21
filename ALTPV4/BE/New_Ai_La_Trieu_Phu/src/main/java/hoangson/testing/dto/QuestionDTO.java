package hoangson.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Data
public class QuestionDTO {
    private int id;

    private String content;

    private int number;

    private String image;

    private List<LevelDTO> levels;

    private List<AnswerDTO> answers;

    @Data
    @NoArgsConstructor
    static class LevelDTO {
        private int id;
    }

    @Data
    @NoArgsConstructor
    static class AnswerDTO {
        private int id;
        private String content;
        private String isTrue;
    }
}

package hoangson.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class PlayerDTO {

    private int id;

    private String name;

    private int level;

    private String avatar;

    private List<ScoreDTO> scores;

    @NoArgsConstructor
    @Data
    static class ScoreDTO {

        private int id;

        private int score;

        @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
        private Date playedAt;
    }
}

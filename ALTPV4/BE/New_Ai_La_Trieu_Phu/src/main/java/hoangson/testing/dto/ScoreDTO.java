package hoangson.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
public class ScoreDTO {

    private int id;

    private int score;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private Date playedAt;
}
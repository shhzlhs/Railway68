package lhs.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class TeamDTO {
    private int id;
    private String name;

    private String logo;

    private int createdYear;

    private String competitionName;

    private List<PlayerDTO> players;

    private String info;

    @Data
    @NoArgsConstructor
    static class PlayerDTO {
        private int id;
        private String name;
        private String position;
        private int joinedYear;
        private String info;

    }
}

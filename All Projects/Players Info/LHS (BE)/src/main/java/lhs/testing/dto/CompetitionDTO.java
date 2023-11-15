package lhs.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CompetitionDTO {

    private int id;
    private String name;
    private String country;
    private int level;
    private String logo;
    private int totalTeam;

    private List<TeamDTO> teams;

    @Data
    @NoArgsConstructor
    static class TeamDTO{
        private int id;
        private String name;
    }
}

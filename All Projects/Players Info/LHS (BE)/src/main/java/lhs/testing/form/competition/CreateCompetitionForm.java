package lhs.testing.form.competition;

import lhs.testing.dto.TeamDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.List;

@Data
@NoArgsConstructor
public class CreateCompetitionForm {

    private int id;

    private String name;

    private String country;

    private int level;

    private String logo;

    private int totalTeam;

    private List<TeamDTO> teams;

    @Data
    @NoArgsConstructor
    public static class Team{

        private int id;

        private String name;

        private int createdYear;

        private String info;
    }
}

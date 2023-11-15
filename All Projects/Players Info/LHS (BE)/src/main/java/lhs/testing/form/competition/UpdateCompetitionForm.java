package lhs.testing.form.competition;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateCompetitionForm {
    private int id;

    private String name;

    private String country;

    private int level;

    private String logo;

    private int totalTeam;

}

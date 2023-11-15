package lhs.testing.form.team;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateTeamForm {

    private int id;

    private String name;

    private String logo;

    private int createdYear;

    private int competitionId;
}

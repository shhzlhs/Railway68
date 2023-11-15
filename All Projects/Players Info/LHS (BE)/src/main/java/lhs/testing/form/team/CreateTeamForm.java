package lhs.testing.form.team;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lhs.testing.entity.Competition;
import lhs.testing.entity.Player;
import lhs.testing.entity.PlayerPosition;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@NoArgsConstructor
public class CreateTeamForm {

    private int id;

    private String name;

    private String logo;

    private int createdYear;

    private int competitionId;


    private String info;


}

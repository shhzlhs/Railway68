package lhs.testing.form.player;

import lhs.testing.entity.PlayerPosition;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdatePlayerForm {

    private int id;

    private String name;

    private String nation;

    private PlayerPosition position;

    private int joinedYear;

    private String info;

    private int teamId;
}

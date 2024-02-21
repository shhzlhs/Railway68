package hoangson.testing.form.player;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreatePlayerForm {

    private int level;

    private String name;

    private String avatar;
}

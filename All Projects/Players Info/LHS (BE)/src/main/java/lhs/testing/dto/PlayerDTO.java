package lhs.testing.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lhs.testing.entity.PlayerPosition;
import lhs.testing.entity.Team;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
public class PlayerDTO {

    private int id;

    private String name;

    private String avatar;

    private String nation;

    private PlayerPosition position;

    private int joinedYear;

    private String info;
    private String teamName;
}

package hoangson.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "`name`", nullable = false, unique = true, length = 200)
    private String name;

    @Column(length = 100)
    private String avatar;

    @Column(name = "`level`")
    private int level;

    @OneToMany(mappedBy = "player")
    @JsonBackReference
    private List<Score> scores;

    @PrePersist
    public void prePersist() {
        if (avatar == null) {
            avatar = "avatar0.png";
        }

    }
}

package hoangson.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name = "player_score")
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private int score;

    @Column(name = "played_at")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date playedAt;

    @ManyToOne
    @JoinColumn(name = "player_id")
    @JsonBackReference
    private Player player;

    @PrePersist
    public void prePersist() {
        Instant now = Instant.now();
        if (playedAt == null) {
            playedAt = Date.from(now);
        }
    }
}

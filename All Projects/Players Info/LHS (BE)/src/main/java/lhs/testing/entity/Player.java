package lhs.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "`name`", length = 100, nullable = false)
    private String name;

    @Column(length = 100)
    private String avatar;

    @Column(length = 30)
    private String nation;

    @Column(name = "`position`")
    @Enumerated(EnumType.STRING)
    private PlayerPosition position;

    @Column(name = "joined_year")
    private int joinedYear;
    @Column
    private String info;

    @ManyToOne
    @JoinColumn(name = "team_id", nullable = false)
    @JsonBackReference
    private Team team;
}

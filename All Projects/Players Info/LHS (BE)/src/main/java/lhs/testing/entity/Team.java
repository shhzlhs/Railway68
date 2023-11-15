package lhs.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "`name`", length = 30, nullable = false, unique = true)
    private String name;

    @Column(length = 100)
    private String logo;

    @Column(name = "created_year")
    private int createdYear;

    @ManyToOne
    @JoinColumn(name = "competition_id", nullable = false)
    @JsonBackReference
    private Competition competition;
    @Column(name = "info")
    private String info;

    @OneToMany(mappedBy = "team")
    @JsonManagedReference
    private List<Player> players;
}

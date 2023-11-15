package lhs.testing.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table
public class Competition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "`name`", length = 30, nullable = false)
    private String name;

    @Column(length = 30, nullable = false)
    private String country;

    @Column(name = "`level`")
    private int level;

    @Column(length = 100)
    private String logo;

    @Column(name = "total_team")
    private int totalTeam;

    @OneToMany(mappedBy = "competition")
    @JsonManagedReference
    private List<Team> teams;
}

package lhs.testing.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 30,nullable = false,unique = true)
    private String username;

    @Column(name = "`name`", length = 30, nullable = false)
    private String name;

    @Column(name = "`role`",nullable = false)
    @Enumerated(EnumType.STRING)
    private UserRole role;

    @Column(name = "`password",length = 800,nullable = false)
    private String password;
}

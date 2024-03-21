package chienvuduc.testing.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Table(name = "Users")
@Data
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(length = 30, unique = true, nullable = false)
    private String username;

    @Column(name = "full_name", length = 50, nullable = false)
    private String fullName;

    @Column(nullable = false, length = 5)
    private String gender;

    @Column(name = "pass", length = 1000, nullable = false)
    private String password;

    @Column
    private int age;

    @Column(length = 1000)
    private String avatar;

    @Column(name = "user_role", length = 5, nullable = false)
    private String role;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Post> posts;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Notification> notifications;

    @ManyToMany
    @JoinTable(
            name = "Follows",
            joinColumns = {@JoinColumn(name = "follower_id")},
            inverseJoinColumns = {@JoinColumn(name = "be_followed_id")}
    )
    private List<User> followings;

    @ManyToMany
    @JoinTable(
            name = "Follows",
            joinColumns = {@JoinColumn(name = "be_followed_id")},
            inverseJoinColumns = {@JoinColumn(name = "follower_id")}
    )
    private List<User> follows;

}

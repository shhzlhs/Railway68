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
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "q_id")
    private int id;

    @Column(name = "q_content")
    private String content;

    @Column(name = "q_number")
    private int number;

    @OneToMany(mappedBy = "question")
    @JsonManagedReference
    private List<Answer> answers;
}

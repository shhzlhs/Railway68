package lhs.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "a_id")
    private int id;

    @Column(name = "a_content")
    private String content;

    @Column(name = "is_true")
    private String isTrue;

    @ManyToOne
    @JoinColumn(name = "q_id", nullable = false)
    @JsonBackReference
    private Question question;
}

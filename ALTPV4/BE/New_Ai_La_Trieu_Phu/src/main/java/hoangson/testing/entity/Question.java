package hoangson.testing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(nullable = false, length = 1000)
    private String content;

    @Column(name = "question_number")
    private int number;

    @OneToMany(mappedBy = "question")
    @JsonBackReference
    private List<Answer> answers;

    @ManyToMany(mappedBy = "questions")
    private List<Level> levels;

    @Column
    private String image;

    @PrePersist
    public void prePersist() {
        if (image == null||image.equals("")) {
            image = "image0.png";
        }
    }
}

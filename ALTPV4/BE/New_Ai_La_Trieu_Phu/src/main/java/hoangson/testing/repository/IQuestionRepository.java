package hoangson.testing.repository;

import hoangson.testing.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IQuestionRepository extends JpaRepository<Question, Integer> {
    Question findById(int id);
    List<Question> findAllByImage(String image);
}

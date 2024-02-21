package hoangson.testing.repository;

import hoangson.testing.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAnswerRepository extends JpaRepository<Answer, Integer> {
    Answer findById(int id);

}

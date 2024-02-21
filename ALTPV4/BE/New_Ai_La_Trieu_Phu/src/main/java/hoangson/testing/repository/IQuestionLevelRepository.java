package hoangson.testing.repository;

import hoangson.testing.entity.QuestionLevel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IQuestionLevelRepository extends JpaRepository<QuestionLevel, Integer> {
}

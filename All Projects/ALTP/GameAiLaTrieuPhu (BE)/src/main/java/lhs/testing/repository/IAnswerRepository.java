package lhs.testing.repository;

import lhs.testing.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface IAnswerRepository extends JpaRepository<Answer,Integer>, JpaSpecificationExecutor {
    List<Answer> findAllByQuestionId(int id);
}

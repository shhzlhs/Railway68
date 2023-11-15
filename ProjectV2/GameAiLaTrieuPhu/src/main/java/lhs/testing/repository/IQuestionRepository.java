package lhs.testing.repository;

import lhs.testing.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface IQuestionRepository extends JpaRepository<Question, Integer>, JpaSpecificationExecutor {

    List<Question> findAllByNumber(int number);
    Question findById(int id);
}

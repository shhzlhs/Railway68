package hoangson.testing.repository;

import hoangson.testing.entity.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IScoreRepository extends JpaRepository<Score, Integer> {

}

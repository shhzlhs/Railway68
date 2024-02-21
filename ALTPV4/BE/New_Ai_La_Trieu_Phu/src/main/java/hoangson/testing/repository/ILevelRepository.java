package hoangson.testing.repository;

import hoangson.testing.entity.Level;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILevelRepository extends JpaRepository<Level, Integer> {
    Level findById(int id);

}

package hoangson.testing.repository;

import hoangson.testing.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPlayerRepository extends JpaRepository<Player, Integer> {

    Player findByName(String name);

    Player findById(int id);
}

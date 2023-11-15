package lhs.testing.repository;

import lhs.testing.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface IPlayerRepository extends JpaRepository<Player,Integer>, JpaSpecificationExecutor {
    List<Player> findAllByTeamId(int id);
}

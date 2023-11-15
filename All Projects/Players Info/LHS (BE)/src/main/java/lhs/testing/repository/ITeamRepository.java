package lhs.testing.repository;

import lhs.testing.entity.Competition;
import lhs.testing.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ITeamRepository extends JpaRepository<Team, Integer>, JpaSpecificationExecutor {
    List<Team> findAllByCompetitionId(int id);
}

package lhs.testing.repository;

import lhs.testing.entity.Competition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ICompetitionRepository extends JpaRepository<Competition,Integer>, JpaSpecificationExecutor {
}

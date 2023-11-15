package lhs.testing.repository;

import lhs.testing.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IUserRepository extends JpaRepository<User,Integer>, JpaSpecificationExecutor {

}

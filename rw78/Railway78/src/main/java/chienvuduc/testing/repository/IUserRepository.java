package chienvuduc.testing.repository;

import chienvuduc.testing.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {
    User findById(int id);
    Optional<User> findByUsername(String username);
}

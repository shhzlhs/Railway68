package chienvuduc.testing.repository;

import chienvuduc.testing.entities.Follow;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IFollowRepository extends JpaRepository<Follow, Integer> {
    List<Follow> findAllByFollowerUsername(String username);

    Follow findByFollowerIdAndBeFollowedId(int followerId, int beFollowedId);
}

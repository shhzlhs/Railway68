package chienvuduc.testing.repository;

import chienvuduc.testing.entities.Like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILikeRepository extends JpaRepository<Like,Integer> {
}

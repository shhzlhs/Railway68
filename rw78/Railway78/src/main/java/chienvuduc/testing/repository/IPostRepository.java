package chienvuduc.testing.repository;

import chienvuduc.testing.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IPostRepository extends JpaRepository<Post, Integer> {
    List<Post> findAllByUserUsername(String username);
    Post findById(int id);
}

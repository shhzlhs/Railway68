package chienvuduc.testing.repository;

import chienvuduc.testing.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICommentRepository extends JpaRepository<Comment, Integer> {
    Comment findById(int id);
}

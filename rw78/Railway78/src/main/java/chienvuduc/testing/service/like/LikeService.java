package chienvuduc.testing.service.like;

import chienvuduc.testing.entities.Like;
import chienvuduc.testing.repository.ICommentRepository;
import chienvuduc.testing.repository.ILikeRepository;
import chienvuduc.testing.repository.IPostRepository;
import chienvuduc.testing.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService implements ILikeService {
    @Autowired
    ICommentRepository commentRepository;
    @Autowired
    ILikeRepository likeRepository;
    @Autowired
    IUserRepository userRepository;
    @Autowired
    IPostRepository postRepository;

    @Override
    public Like like(int postId, int commentId, int userId) {
        Like like = new Like();
        if (postId == 0) {
            like.setComment(commentRepository.findById(commentId));
        } else {
            like.setPost(postRepository.findById(postId));
        }
        like.setUser(userRepository.findById(userId));
        likeRepository.save(like);
        return like;
    }

    @Override
    public void disLike(int id) {
        likeRepository.deleteById(id);
    }
}

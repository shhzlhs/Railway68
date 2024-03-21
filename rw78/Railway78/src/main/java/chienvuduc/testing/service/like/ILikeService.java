package chienvuduc.testing.service.like;

import chienvuduc.testing.entities.Like;

public interface ILikeService {
    Like like(int postId, int commentId, int userId);

    void disLike(int id);
}

package chienvuduc.testing.service.follow;

import chienvuduc.testing.entities.Follow;
import chienvuduc.testing.entities.User;

import java.util.List;

public interface IFollowService {
    List<Follow> findAllByFollowerUsername(String username);

    List<User> getSuggestByUsername(String username);

    User follow(int followerId, int beFollowedId);

    String unfollow(int followerId, int beFollowedId);
}

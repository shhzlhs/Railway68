package chienvuduc.testing.service.follow;

import chienvuduc.testing.entities.Follow;
import chienvuduc.testing.entities.User;
import chienvuduc.testing.repository.IFollowRepository;
import chienvuduc.testing.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class FollowService implements IFollowService {
    @Autowired
    IFollowRepository followRepository;
    @Autowired
    IUserRepository userRepository;

    @Override
    public List<Follow> findAllByFollowerUsername(String username) {
        return followRepository.findAllByFollowerUsername(username);

    }

    @Override
    public List<User> getSuggestByUsername(String username) {
        List<Follow> followings = followRepository.findAllByFollowerUsername(username);
        if (followings.isEmpty()) {
            return new ArrayList<>();
        }

        Set<User> suggestedUsers = new HashSet<>();

        for (Follow follow : followings) {
            List<Follow> followingsOfFollowings = followRepository.findAllByFollowerUsername(follow.getBeFollowed().getUsername());
            for (Follow followingOfFollowing : followingsOfFollowings) {
                User suggestedUser = userRepository.findByUsername(followingOfFollowing.getBeFollowed().getUsername()).orElse(null);


                if (suggestedUser != null && !suggestedUser.getUsername().equals(username) && !followings.stream().anyMatch(f -> f.getBeFollowed().getUsername().equals(suggestedUser.getUsername()))) {
                    suggestedUsers.add(suggestedUser);
                }
            }
        }

        return new ArrayList<>(suggestedUsers);
    }

    @Override
    public User follow(int followerId, int beFollowedId) {
        Follow follow = new Follow();
        follow.setFollower(userRepository.findById(followerId));
        follow.setBeFollowed(userRepository.findById(beFollowedId));
        followRepository.save(follow);
        return userRepository.findById(beFollowedId);
    }

    @Override
    public String unfollow(int followerId, int beFollowedId) {
        Follow follow = followRepository.findByFollowerIdAndBeFollowedId(followerId, beFollowedId);
        followRepository.deleteById(follow.getId());
        return userRepository.findById(beFollowedId).getUsername();
    }

    public static List<User> getRandomElements(List<User> userList, int n) {
        if (userList.isEmpty() || n <= 0) {
            return new ArrayList<>();
        } else {
            if (userList.size() < n) {
                return userList;
            } else {
                Set<Integer> chosenIndices = new HashSet<>();
                List<User> result = new ArrayList<>();
                Random random = new Random();

                while (result.size() < n) {
                    int randomIndex = random.nextInt(userList.size());
                    if (!chosenIndices.contains(randomIndex)) {
                        result.add(userList.get(randomIndex));
                        chosenIndices.add(randomIndex);
                    }
                }

                return result;
            }
        }
    }
}

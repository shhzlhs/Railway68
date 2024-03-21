package chienvuduc.testing.controller;

import chienvuduc.testing.dto.FollowingDTO;
import chienvuduc.testing.dto.UserDetailDTO;
import chienvuduc.testing.dto.UserSearchDTO;
import chienvuduc.testing.service.follow.IFollowService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/follows")
@CrossOrigin("*")
public class FollowController {
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IFollowService followService;

    @GetMapping(value = "/findFollowings/{username}")
    public List<FollowingDTO> findFollowingsByUsername(@PathVariable String username) {
        return modelMapper.map(followService.findAllByFollowerUsername(username), new TypeToken<List<FollowingDTO>>() {
        }.getType());
    }

    @GetMapping(value = "/suggest/{username}")
    public List<UserDetailDTO> suggestFollowByUsername(@PathVariable String username) {
        return modelMapper.map(followService.getSuggestByUsername(username), new TypeToken<List<UserDetailDTO>>() {
        }.getType());
    }

    @PostMapping(value = "/follow/{followerId}/{beFollowedId}")
    public UserDetailDTO follow(@PathVariable int followerId, @PathVariable int beFollowedId) {
        return modelMapper.map(followService.follow(followerId, beFollowedId), UserDetailDTO.class);
    }

    @DeleteMapping(value = "/unfollow/{followerId}/{beFollowedId}")
    public String unfollow(@PathVariable int followerId, @PathVariable int beFollowedId) {
        return followService.unfollow(followerId, beFollowedId);
    }
}

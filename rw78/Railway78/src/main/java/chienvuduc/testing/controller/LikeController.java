package chienvuduc.testing.controller;

import chienvuduc.testing.dto.LikeDTO;
import chienvuduc.testing.service.like.ILikeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/likes")
@CrossOrigin("*")
public class LikeController {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    ILikeService likeService;

    @PostMapping(value = "/{postId}/{commentId}/{userId}")
    public LikeDTO like(@PathVariable int postId, @PathVariable int commentId, @PathVariable int userId) {
        return modelMapper.map(likeService.like(postId, commentId, userId), LikeDTO.class);
    }

    @DeleteMapping(value = "/{id}")
    public void dislike(@PathVariable int id) {
        likeService.disLike(id);
    }
}

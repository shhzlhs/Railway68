package chienvuduc.testing.controller;

import chienvuduc.testing.dto.FollowingDTO;
import chienvuduc.testing.dto.PostDTO;
import chienvuduc.testing.form.AddPostForm;
import chienvuduc.testing.service.post.IPostService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/posts")
@CrossOrigin("*")
public class PostController {
    @Autowired
    IPostService postService;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping(value = "/{usernames}")
    public List<PostDTO> getPostByUsers(@PathVariable List<String> usernames) {
        return modelMapper.map(postService.findPostByUsernames(usernames), new TypeToken<List<PostDTO>>() {
        }.getType());
    }

    @PostMapping
    public PostDTO addPost(@RequestBody AddPostForm form) {
        return modelMapper.map(postService.addPost(form), PostDTO.class);
    }
}

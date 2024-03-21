package chienvuduc.testing.service.post;

import chienvuduc.testing.entities.Post;
import chienvuduc.testing.form.AddPostForm;

import java.util.List;

public interface IPostService {
    List<Post> findPostByUsernames(List<String> usernames);

    Post addPost(AddPostForm form);
}

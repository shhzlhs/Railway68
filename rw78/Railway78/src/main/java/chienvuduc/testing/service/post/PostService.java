package chienvuduc.testing.service.post;

import chienvuduc.testing.entities.Post;
import chienvuduc.testing.form.AddPostForm;
import chienvuduc.testing.repository.IPostRepository;
import chienvuduc.testing.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService implements IPostService {
    @Autowired
    IPostRepository postRepository;
    @Autowired
    IUserRepository userRepository;

    @Override
    public List<Post> findPostByUsernames(List<String> usernames) {
        List<Post> posts = new ArrayList<>();
        for (String username : usernames) {

            posts.addAll(postRepository.findAllByUserUsername(username));
        }
        return posts;
    }

    @Override
    public Post addPost(AddPostForm form) {
        Post post = new Post();
        post.setContent(form.getContent());
        post.setImage(form.getImage());
        post.setLikes(new ArrayList<>());
        post.setComments(new ArrayList<>());
        post.setUser(userRepository.findById(form.getUserId()));
        postRepository.save(post);
        return post;
    }
}

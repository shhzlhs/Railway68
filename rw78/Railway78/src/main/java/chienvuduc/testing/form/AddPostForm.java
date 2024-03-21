package chienvuduc.testing.form;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AddPostForm {
    private String content;
    private int userId;
    private String image;
}

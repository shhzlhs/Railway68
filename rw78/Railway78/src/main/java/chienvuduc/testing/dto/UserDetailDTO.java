package chienvuduc.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class UserDetailDTO {

    private int id;
    private String username;
    private String fullName;
    private String gender;
    private int age;
    private String avatar;
    private List<PostDTO> posts;
    private List<UserDTO> followings;
    private List<UserDTO> follows;

    @Data
    @NoArgsConstructor
    static class PostDTO{
        private int id;
        private String image;
        @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
        private Date createdAt;
    }
    @Data
    @NoArgsConstructor
    static class UserDTO {
        private int id;
        private String username;
        private String fullName;
        private String avatar;
    }
}

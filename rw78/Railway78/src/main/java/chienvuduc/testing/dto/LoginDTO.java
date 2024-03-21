package chienvuduc.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class LoginDTO {
    private int id;
    private String username;
    private String fullName;
    private String role;
    private String gender;
    private String avatar;
    private List<UserDetailDTO.UserDTO> followings;
    private List<UserDetailDTO.UserDTO> follows;

    @Data
    @NoArgsConstructor
    static class UserDTO {
        private int id;
        private String username;
        private String fullName;
        private String avatar;

    }
}

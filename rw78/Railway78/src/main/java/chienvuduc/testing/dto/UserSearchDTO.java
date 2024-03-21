package chienvuduc.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class UserSearchDTO {
    private int id;
    private String username;
    private String fullName;
    private String avatar;
    private List<UserDTO> follows;

    @Data
    @NoArgsConstructor
    static class UserDTO {
        private int id;
        private String fullName;
    }
}

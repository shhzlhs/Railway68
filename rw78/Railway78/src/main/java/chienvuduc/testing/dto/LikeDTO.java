package chienvuduc.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class LikeDTO {
    private int id;
    private String userUsername;
    private String userAvatar;
    private String userFullName;
}

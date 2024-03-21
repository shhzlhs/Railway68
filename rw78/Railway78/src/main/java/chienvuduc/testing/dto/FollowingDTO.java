package chienvuduc.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FollowingDTO {
    private int beFollowedId;
    private String beFollowedUsername;
    private String beFollowedFullName;
    private String beFollowedAvatar;
}

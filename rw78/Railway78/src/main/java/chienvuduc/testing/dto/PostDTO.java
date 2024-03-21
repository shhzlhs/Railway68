package chienvuduc.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class PostDTO {
    private int id;
    private String content;
    private String userUsername;
    private String userAvatar;
    private String userFullName;
    private String image;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
    private Date createdAt;
    private List<LikeDTO> likes;
    private List<CommentDTO> comments;

    @Data
    @NoArgsConstructor
    static class LikeDTO {
        private int id;
        private String userUsername;
        private String userAvatar;
        private String userFullName;
    }

    @Data
    @NoArgsConstructor
    static class CommentDTO {
        private int id;
        private String content;
        private String userUsername;
        private String userAvatar;
        private String userFullName;
        @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
        private Date createdAt;
        private List<CommentDTO1> replies;
        private List<LikeDTO1> likes;


        @Data
        @NoArgsConstructor
        static class CommentDTO1 {
            private int id;
            private String content;
            private String userUsername;
            private String userAvatar;
            private String userFullName;
            @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
            private Date createdAt;
            private List<LikeDTO2> likes;

            @Data
            @NoArgsConstructor
            static class LikeDTO2 {
                private int id;
                private String userUsername;
                private String userAvatar;
                private String userFullName;
            }
        }

        @Data
        @NoArgsConstructor
        static class LikeDTO1 {
            private int id;
            private String userUsername;
            private String userAvatar;
            private String userFullName;
        }
    }
}

package chienvuduc.testing.form;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RegisterForm {
    private String username;
    private String fullName;
    private int age;
    private String gender;
    private String password;
    private String avatar;
}

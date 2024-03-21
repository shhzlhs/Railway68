package chienvuduc.testing.service.user;

import chienvuduc.testing.entities.User;
import chienvuduc.testing.form.CheckUsernameForm;
import chienvuduc.testing.form.RegisterForm;
import chienvuduc.testing.form.UserFilterForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;

public interface IUserService {
    Page<User> searchUser(UserFilterForm form, Pageable pageable);

    User viewUser(int id);

    User findByUsername(String username);

    void register(RegisterForm form);

    String checkUsername(CheckUsernameForm form);

}

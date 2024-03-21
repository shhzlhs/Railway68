package chienvuduc.testing.service.user;

import chienvuduc.testing.entities.User;
import chienvuduc.testing.form.CheckUsernameForm;
import chienvuduc.testing.form.RegisterForm;
import chienvuduc.testing.form.UserFilterForm;
import chienvuduc.testing.repository.IUserRepository;
import chienvuduc.testing.specification.UserSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@Service
public class UserService implements IUserService, UserDetailsService {

    @Autowired
    IUserRepository userRepository;

    @Override
    public Page<User> searchUser(UserFilterForm form, Pageable pageable) {
        Specification<User> where = UserSpecification.buildWhere(form);
        return userRepository.findAll(where, pageable);
    }

    @Override
    public User viewUser(int id) {
        return userRepository.findById(id);
    }

    @Override
    public User findByUsername(String username) {
        Optional<User> optional = userRepository.findByUsername(username);
        return optional.get();
    }

    @Override
    public void register(RegisterForm form) {
        User user = new User();
        user.setUsername(form.getUsername());
        user.setAge(form.getAge());
        user.setAvatar(form.getAvatar());
        user.setGender(form.getGender());
        user.setPassword(new BCryptPasswordEncoder().encode(form.getPassword()));
        user.setFullName(form.getFullName());
        user.setRole("USER");
        userRepository.save(user);
    }

    @Override
    public String checkUsername(CheckUsernameForm form) {
        User user = userRepository.findByUsername(form.getUsername()).orElse(null);
        if (user != null) {
            return "Y";
        } else {
            return "N";
        }
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optional = userRepository.findByUsername(username);
        if (optional.isPresent()) {
            User user = optional.get();
            return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), Collections.emptyList());
        } else {
            throw new UsernameNotFoundException(username);
        }
    }
}

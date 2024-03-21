package chienvuduc.testing.controller;

import chienvuduc.testing.dto.UserDetailDTO;
import chienvuduc.testing.dto.UserSearchDTO;
import chienvuduc.testing.entities.User;
import chienvuduc.testing.form.CheckUsernameForm;
import chienvuduc.testing.form.RegisterForm;
import chienvuduc.testing.form.UserFilterForm;
import chienvuduc.testing.service.user.IUserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    IUserService userService;
    @Autowired
    ModelMapper modelMapper;

    @GetMapping
    public Page<UserSearchDTO> searchUser(UserFilterForm form, @PageableDefault(size = 10, page = 0) Pageable pageable) {
        Page<User> userPage = userService.searchUser(form, pageable);
        List<User> users = userPage.getContent();
        List<UserSearchDTO> userSearchDTOS = modelMapper.map(users, new TypeToken<List<UserSearchDTO>>() {
        }.getType());
        return new PageImpl<>(userSearchDTOS, pageable, userPage.getTotalElements());
    }

    @GetMapping(value = "/id={id}")
    public UserDetailDTO viewUser(@PathVariable int id) {
        return modelMapper.map(userService.viewUser(id), UserDetailDTO.class);
    }

    @GetMapping(value = "/username={username}")
    public UserDetailDTO findByUsername(@PathVariable String username) {
        return modelMapper.map(userService.findByUsername(username), UserDetailDTO.class);
    }

    @PostMapping(value = "/register")
    public void register(@RequestBody RegisterForm form) {
        userService.register(form);
    }

    @PostMapping(value = "/check")
    public String checkUsername(@RequestBody CheckUsernameForm form) {
        return userService.checkUsername(form);
    }

}

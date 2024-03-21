package chienvuduc.testing.controller;

import chienvuduc.testing.dto.LoginDTO;
import chienvuduc.testing.entities.User;
import chienvuduc.testing.repository.IUserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1/auth")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    IUserRepository userRepository;
    @Autowired
    ModelMapper modelMapper;

    public class AppException extends RuntimeException {
        public AppException(String message) {
            super(message);
        }
    }


    @PostMapping(value = "/login")
    public LoginDTO login (Principal principal){
        String username = principal.getName();
        Optional<User> user = userRepository.findByUsername(username);
        if(user.isEmpty()){
            throw  new AppException("Sai tên đăng nhập hoặc mật khẩu!");
        }else {
            return modelMapper.map(user.get(),LoginDTO.class);
        }
    }
}

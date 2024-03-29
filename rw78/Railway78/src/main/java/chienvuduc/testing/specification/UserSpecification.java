package chienvuduc.testing.specification;

import chienvuduc.testing.entities.User;
import chienvuduc.testing.form.UserFilterForm;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class UserSpecification {

    public static final String USERNAME = "username";
    public static final String FULL_NAME = "fullName";

    public static Specification<User> buildWhere(UserFilterForm form) {
        if (form == null) {
            return null;
        }
        Specification whereUsername = new CustomSpecification(USERNAME, form.getSearch());
        Specification whereFullName = new CustomSpecification(FULL_NAME, form.getSearch());
        return Specification.where((whereUsername.or(whereFullName)));
    }

    @AllArgsConstructor
    static class CustomSpecification implements Specification<User> {
        private String key;
        private Object value;

        @Override
        public Predicate toPredicate(Root<User> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
            if (value == null) {
               return null;
            }
            switch (key) {
                case USERNAME:
                   return criteriaBuilder.like(root.get("username"), "%" + value + "%");
                case FULL_NAME:
                    return criteriaBuilder.like(root.get("fullName"), "%" + value + "%");
              default:
                    return null;
           }
        }

    }
}

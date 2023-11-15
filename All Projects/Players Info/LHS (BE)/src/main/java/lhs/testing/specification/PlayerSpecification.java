package lhs.testing.specification;

import lhs.testing.entity.Player;
import lhs.testing.form.player.PlayerFilterForm;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class PlayerSpecification {
    public static final String NAME = "name";

    public static Specification<Player> buildWhere(PlayerFilterForm form) {
        if (form == null) {
            return null;
        }
        Specification whereName = new CustomSpecification(NAME, form.getSearch());
        return Specification.where(whereName);
    }

    ;

    @AllArgsConstructor
    static class CustomSpecification implements Specification<Player> {
        private String key;
        private Object value;

        @Override
        public Predicate toPredicate(Root<Player> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
            if (value == null) {
                return null;
            }
            switch (key) {
                case NAME:
                    return criteriaBuilder.like(root.get("name"), "%" + value + "%");
                default:
                    return null;
            }
        }
    }
}

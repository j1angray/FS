package REST_webservices.REST;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoJpaRepository extends JpaRepository <TodoItem, Long>{
	List<TodoItem> findByUsername(String username);
}

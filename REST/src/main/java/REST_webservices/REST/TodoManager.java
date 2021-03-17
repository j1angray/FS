package REST_webservices.REST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//import java.net.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class TodoManager {
	
	@Autowired
	private TodoHardcodedExample codedTodos;
	
	@GetMapping("/users/{username}/todos")
	public List<TodoItem> retrieveAllItems(@PathVariable String username) {
		return codedTodos.getTodos();
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteItem(@PathVariable String username, @PathVariable long id) {

		TodoItem todo = codedTodos.deleteItembyID(id);
		
		if (todo != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}
}

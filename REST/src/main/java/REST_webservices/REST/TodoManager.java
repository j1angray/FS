package REST_webservices.REST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class TodoManager {
	
	@Autowired
	private TodoHardcodedExample codedTodos;
	
	@GetMapping("/users/{username}/todos")
	public List<TodoItem> retrieveAllItems(@PathVariable String username) {
		return codedTodos.getTodos();
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public TodoItem retrieveItemInfo(@PathVariable String username, @PathVariable long id) {
		return codedTodos.selectItembyID(id);
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteItem(@PathVariable String username, @PathVariable long id) {
		TodoItem todo = codedTodos.deleteItembyID(id);
		
		if (todo != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build(); // ResponseEntity - HTTP Standards
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<TodoItem> updateItem(@PathVariable String username, @PathVariable long id, @RequestBody TodoItem item) {		
		TodoItem todo = codedTodos.updateItem(item);

		return new ResponseEntity<TodoItem>(todo, HttpStatus.OK); // HttpStatus - HTTP Standards
	}
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> save(@PathVariable String username, @RequestBody TodoItem item) {	
		TodoItem todo = codedTodos.updateItem(item);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(todo.getId()).toUri();
		
		return ResponseEntity.created(uri).build(); 
	}
	
}

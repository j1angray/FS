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
public class TodoJpaManager {
	
	@Autowired
	private TodoHardcodedExample codedTodos;
	
	@Autowired
	private TodoJpaRepository JpaTodos;
	
	@GetMapping("/jpa/users/{username}/todos")
	public List<TodoItem> retrieveAllItems(@PathVariable String username) {
		return JpaTodos.findByUsername(username); 
		//return codedTodos.getTodos();
		
	}
	
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public TodoItem retrieveItemInfo(@PathVariable String username, @PathVariable long id) {
		return JpaTodos.findById(id).get();
		//return codedTodos.selectItembyID(id);
	}
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteItem(@PathVariable String username, @PathVariable long id) {
		JpaTodos.deleteById(id);
		return ResponseEntity.notFound().build(); 
		/*
		TodoItem todo = codedTodos.deleteItembyID(id);	
		if (todo != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build(); // ResponseEntity - HTTP Standards
		*/
	}
	
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<TodoItem> updateItem(@PathVariable String username, @PathVariable long id, @RequestBody TodoItem item) {		
		item.setUsername(username); //front end don't provide username field
		TodoItem todo = JpaTodos.save(item);
		
		return new ResponseEntity<TodoItem>(todo, HttpStatus.OK); // HttpStatus - HTTP Standards
	}
	
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Void> save(@PathVariable String username, @RequestBody TodoItem item) {		
		item.setUsername(username);
		TodoItem todo = JpaTodos.save(item);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(todo.getId()).toUri();
		
		return ResponseEntity.created(uri).build(); 
	}
	
}

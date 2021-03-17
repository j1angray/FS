package REST_webservices.REST;

//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "http://localhost:4200")

@RestController 
//a controller which can handle Rest requests
public class HelloworldObject {
	
	//@RequestMapping(method = RequestMethod.GET, path = "/helloworld") ////mapped GET request to the URI
	@GetMapping(path = "/helloworld")
	public String helloworld() {
		return "Hello World";
	}
	
	@GetMapping(path = "/helloworld/path/{name}")
	public String helloworldPathVar(@PathVariable String name) {
		return "Hello World, " + name;
	}
	
}

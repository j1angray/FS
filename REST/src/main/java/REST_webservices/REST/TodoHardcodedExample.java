package REST_webservices.REST;

import java.util.*;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedExample {
	private static List<TodoItem> todos = new ArrayList<TodoItem>();
	private static long counter = 0;
	
	static {
		todos.add(new TodoItem(++counter, "vante", "full stack course", new Date(), false));
		todos.add(new TodoItem(++counter, "vante", "do the laundry", new Date(), false));
		todos.add(new TodoItem(++counter, "vante", "writing", new Date(), false));
	}
	
	public List<TodoItem> getTodos(){
		return todos;
	}
	
	public TodoItem updateItem(TodoItem item){
		if(item.getId() == -1 || item.getId() == 0) { // new item
			item.setId(++counter);
			todos.add(item);
		}
		else {
			deleteItembyID(item.getId());
			todos.add(item);
		}
		return item;
	}
	
	public TodoItem deleteItembyID(long id){
		TodoItem selectedItem = selectItembyID(id);
		if(selectedItem == null) {
			return null;
		}
		if (todos.remove(selectedItem)) {
			return selectedItem;
		}
		
		return null;
	}
	
	public TodoItem selectItembyID(long id){
		for(TodoItem item: todos) {
			if (item.getId() == id) {
				return item;
			}
		}
		return null;
	}
	
}

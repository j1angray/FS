package REST_webservices.REST;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TodoItem {
	@Id
	@GeneratedValue
	private Long id; // should be auto-generated
	private String username;
	private String description;
	private Date deadline;
	private boolean finished;
	
	protected TodoItem() { // Error 500 (Type definition error, no creators)
		
	}

	public TodoItem(long id, String username, String description, Date deadline, boolean finished) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.deadline = deadline;
		this.finished = finished;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDeadline() {
		return deadline;
	}
	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}
	public boolean isFinished() {
		return finished;
	}
	public void setFinished(boolean finished) {
		this.finished = finished;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TodoItem other = (TodoItem) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
}

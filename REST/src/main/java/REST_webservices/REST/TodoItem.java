package REST_webservices.REST;

import java.util.Date;

public class TodoItem {
	private long id;
	private String username;
	private String description;
	private Date deadline;
	private boolean finished;
	
	public TodoItem(long id, String username, String description, Date deadline, boolean finished) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.deadline = deadline;
		this.finished = finished;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
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

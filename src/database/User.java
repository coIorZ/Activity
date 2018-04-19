package database;

import java.util.List;

public class User {
	private String id;
	private String name;
	private String username;
	private String password;
	private String gender;
	private String phone;
	private List<Activity> attend;
	private List<Activity> launch;
	private List<Activity> like;
	
	public User(String id, String name, String username, String password, String gender, String phone, List<Activity> attend, List<Activity> launch, List<Activity> like) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.password = password;
		this.gender = gender;
		this.phone = phone;
		this.attend = attend;
		this.launch = launch;
		this.like = like;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public List<Activity> getAttend() {
		return attend;
	}

	public void setAttend(List<Activity> attend) {
		this.attend = attend;
	}

	public List<Activity> getLaunch() {
		return launch;
	}

	public void setLaunch(List<Activity> launch) {
		this.launch = launch;
	}

	public List<Activity> getLike() {
		return like;
	}

	public void setLike(List<Activity> like) {
		this.like = like;
	}
	
	
}

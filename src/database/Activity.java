package database;

import java.util.List;

public class Activity {
	private String id;
	private String name;
	private String desc;
	private String startTime;
	private String endTime;
	private String category;
	private int count;
	private String image;
	private int likes;
	private int participants;
	private String creatorId;
	private String creatorName;
	private List<Comment> comments;
	private String createdAt;
	private List<User> users;
	
	public Activity(String id, String name, String desc, String startTime,
			String endTime, String category, int count, String image,
			int likes, int participants, String creatorId, String creatorName, List<Comment> comments, String createdAt, List<User> users) {
		super();
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.category = category;
		this.count = count;
		this.image = image;
		this.startTime = startTime;
		this.endTime = endTime;
		this.likes = likes;
		this.participants = participants;
		this.creatorId = creatorId;
		this.creatorName = creatorName;
		this.comments = comments;
		this.createdAt = createdAt;
		this.users = users;
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

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public int getParticipants() {
		return participants;
	}

	public void setParticipants(int participants) {
		this.participants = participants;
	}

	public String getCreatorId() {
		return creatorId;
	}

	public void setCreatorId(String creatorId) {
		this.creatorId = creatorId;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public String getCreatorName() {
		return creatorName;
	}

	public void setCreatorName(String creatorName) {
		this.creatorName = creatorName;
	}
	
	public String getCreatedAt() {
		return createdAt;
	}
	
	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}


	
}

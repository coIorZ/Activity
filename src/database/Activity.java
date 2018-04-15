package database;

public class Activity {
	private int id;
	private String name;
	private String desc;
	private String category;
	private int count;
	private String image;
	private String startTime;
	private String endTime;
	private int likes;
	private int participants;
	private User creator;
	
	public Activity(int id, String name, String desc, String startTime,
			String endTime, String category, int count, String image,
			int likes, int participants, User creator) {
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
		this.creator = creator;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
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
	public User getCreator() {
		return creator;
	}
	public void setCreator(User creator) {
		this.creator = creator;
	}
	
}

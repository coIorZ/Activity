package database;

public class Comment {
	private String userId;
	private String userName;
	private String activityId;
	private String comment;
	private String createdAt;
	public Comment(String userId, String userName, String activityId, String comment, String createdAt) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.activityId = activityId;
		this.comment = comment;
		this.createdAt = createdAt;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getActivityId() {
		return activityId;
	}
	public void setActivityId(String activityId) {
		this.activityId = activityId;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
	
	

}

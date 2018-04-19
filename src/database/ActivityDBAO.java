package database;

import java.sql.*;
import java.util.*;


public class ActivityDBAO {
	Connection con;
	
	public ActivityDBAO() throws Exception {
		try {
			DB db = new DB();
			con = db.getConnection();
		} catch (Exception e) {
			System.out.println("Exception in ActivityDBAO: " + e);
			throw new Exception("Couldn't open connection to database: "
					+ e.getMessage());
		}
	}
	
	public List<Activity> getActivitiesByCategory(String category) throws SQLException {
		ArrayList<Activity> activities = new ArrayList<>();
		try {
			String sqlStatement = "select a.id, a.name, a.desc, a.startTime, a.endTime, a.category, a.count, a.image from activities as a where a.category = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, category);
			
			ResultSet rs = prepStmt.executeQuery();
			
			while(rs.next()) {
				Activity activity = new Activity(rs.getString(1), 
						rs.getString(2), rs.getString(3), rs.getString(4) , rs.getString(5), rs.getString(6), rs.getInt(7), rs.getString(8), 0, 0, null, null, null, null, null);
				activities.add(activity);
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return activities;
	}
	
	public List<Activity> getRecentActivity() throws SQLException {
		List<Activity> activities = new ArrayList<>();
		try {
			String sqlStatement = "select a.id, a.name, a.desc, a.startTime, a.endTime, a.category, a.count, a.image from activities as a where id in (select t.id from (select id from activities where  category = 'music'  order by createdAt desc  limit 2) as t)or id in (select t.id from (select id from activities where  category = 'lecture' order by createdAt desc  limit 2) as t)or id in (select t.id from (select id from activities where  category = 'party' order by createdAt desc  limit 2) as t) or id in (select t.id from (select id from activities where  category = 'movie' order by createdAt desc  limit 2) as t) or id in (select t.id from (select id from activities where  category = 'exhibition' order by createdAt desc  limit 2) as t) or id in (select t.id from (select id from activities where  category = 'sport' order by createdAt desc  limit 2) as t)or id in (select t.id from (select id from activities where  category = 'travel' order by createdAt desc  limit 2) as t)or id in (select t.id from (select id from activities where  category = 'others' order by createdAt desc limit 2) as t)";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			ResultSet rs = prepStmt.executeQuery();
			
			while(rs.next()) {
				Activity activity = new Activity(rs.getString(1), 
						rs.getString(2), rs.getString(3), rs.getString(4) , rs.getString(5), rs.getString(6), rs.getInt(7), rs.getString(8), 0, 0, null, null, null, null, null);
				activities.add(activity);
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return activities;
	}
	
	public Activity getActivityById(String id) throws Exception {
		Activity activity = null;
		try {
			CommentDBAO db = new CommentDBAO();
			UserDBAO db_1 = new UserDBAO();
			List<Comment> comments = db.getCommentsByActivityId(id);
			List<User> users = db_1.getParticipantsByActivityId(id);
			
			String sqlStatement = "select a.*, u.name from activities as a inner join users as u on a.creatorId = u.id where a.id = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, id);
			
			ResultSet rs = prepStmt.executeQuery();
			
			if(rs.next()) {
				activity = new Activity(rs.getString(1), 
						rs.getString(2), rs.getString(3), rs.getString(4),
						rs.getString(5), rs.getString(6), rs.getInt(7),
						rs.getString(8), rs.getInt(9), rs.getInt(10), rs.getString(11), rs.getString(12), comments, rs.getString(13), users);
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return activity;
	}
	
	public void createActivity(Activity activity) throws SQLException {
		try {
			String sqlStatement = "insert into activities(name, `desc`, startTime, endTime, category, count, image, creatorId) values "
					+ "(?,?,?,?,?,?,?,?)";
			PreparedStatement preparedStatement = con.prepareStatement(sqlStatement);
			preparedStatement.setString(1, activity.getName());
			preparedStatement.setString(2, activity.getDesc());
			preparedStatement.setString(3, activity.getStartTime());
			preparedStatement.setString(4, activity.getEndTime());
			preparedStatement.setString(5, activity.getCategory());
			preparedStatement.setInt(6, activity.getCount());
			preparedStatement.setString(7, activity.getImage());
			preparedStatement.setString(8, activity.getCreatorId());
			
			preparedStatement.execute();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
	
	public void deleteActivity(String id) throws SQLException {
		try {
			String sqlStatement = "delete from activities where id = ?";
			PreparedStatement preparedStatement = con.prepareStatement(sqlStatement);
			preparedStatement.setString(1, id);
			
			preparedStatement.execute();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
	
	public void participate(String userId, String activityId) throws SQLException {
		try {
			String sqlStatement = "insert into participations(userId, activityId) values "
					+ "(?,?)";
			PreparedStatement preparedStatement = con.prepareStatement(sqlStatement);
			preparedStatement.setString(1, userId);
			preparedStatement.setString(2, activityId);
			
			preparedStatement.execute();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
			
	public void like(String userId ,String activityId) throws SQLException {
		try {
			String sqlStatement = "insert into likes(userId, activityId) values "
					+ "(?,?)";
			PreparedStatement preparedStatement = con.prepareStatement(sqlStatement);
			preparedStatement.setString(1,userId );
			preparedStatement.setString(2,activityId );
					
			preparedStatement.execute();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
	
	public void unparticipate(String userId, String activityId) throws SQLException {
		try {
			String sqlStatement = "delete from participations where userId = ? and activityId = ?";
			PreparedStatement preparedStatement = con.prepareStatement(sqlStatement);
			preparedStatement.setString(1, userId);
			preparedStatement.setString(2, activityId);
					
			preparedStatement.execute();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
			
	public void dislike(String userId ,String activityId) throws SQLException {
		try {
			String sqlStatement = "delete from likes where likes.userId = ? and likes.activityId = ?";
			PreparedStatement preparedStatement = con.prepareStatement(sqlStatement);
			preparedStatement.setString(1,userId );
			preparedStatement.setString(2,activityId );
					
			preparedStatement.execute();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
	
	public List<Activity> getActivityByTerm(String term) throws SQLException {
		List<Activity> activities = new ArrayList<>();
		try {
			String sqlStatement = "select a.id, a.name, a.desc, a.startTime, a.endTime, a.category, a.count, a.image from activities as a inner join users as u on a.creatorId = u.id where a.name like ? or a.desc like ? or u.name like ? ";
			PreparedStatement preparedStatement = con.prepareStatement(sqlStatement);
			preparedStatement.setString(1,"%" + term + "%" );
			preparedStatement.setString(2,"%" + term + "%" );
			preparedStatement.setString(3,"%" + term + "%" );
			ResultSet rs = preparedStatement.executeQuery();
			
			while(rs.next()) {
				Activity activity = new Activity(rs.getString(1), 
						rs.getString(2), rs.getString(3), rs.getString(4) , rs.getString(5), rs.getString(6), rs.getInt(7), rs.getString(8), 0, 0, null, null, null, null, null);
				activities.add(activity);
			}
			preparedStatement.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return activities;
	}
}
	



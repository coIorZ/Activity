package database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDBAO {
	Connection con;
	
	public UserDBAO() throws Exception {
		try {
			DB db = new DB();
			con = db.getConnection();
		} catch (Exception e) {
			System.out.println("Exception in UserDBAO: " + e);
			throw new Exception("Couldn't open connection to database: "
					+ e.getMessage());
		}
	}
	
	public void createUser(User user) throws SQLException {
		try {
			String sqlStatement = "insert into users(name, username, password, gender, phone) values "
					+ "(?,?,?,?,?)";
			PreparedStatement preparedStatement = con.prepareStatement(sqlStatement);
			preparedStatement.setString(1, user.getName());
			preparedStatement.setString(2, user.getUsername());
			preparedStatement.setString(3, user.getPassword());
			preparedStatement.setString(4, user.getGender());
			preparedStatement.setString(5, user.getPhone());
			
			preparedStatement.execute();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
	
	public User getUserByUsername(String username) throws SQLException {
		User user = null;
		try {
			String sqlStatement = "select id, name, gender, phone from users where username = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, username);
			
			ResultSet rs = prepStmt.executeQuery();
			
			if(rs.next()) {
				user = new User(rs.getString(1), rs.getString(2), null, null, rs.getString(3), rs.getString(4), null, null, null);
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return user;
	}
	
	public User getUserById(String id) throws SQLException {
		User user = null;
		try {
			String sqlStatement = "select id, name, gender, phone from users where id = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, id);
			
			ResultSet rs = prepStmt.executeQuery();
			
			if(rs.next()) {
				user = new User(rs.getString(1), rs.getString(2), null, null, rs.getString(3), rs.getString(4), null, null, null);
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return user;
	}
	
	public List<Activity> getLaunchActivityById(String id) throws SQLException {
		List<Activity> activities = new ArrayList<>();
		try {
			String sqlStatement = "select * from activities where creatorId = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, id);
			
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
	
	public List<Activity> getAttendActivityById(String id) throws SQLException {
		List<Activity> activities = new ArrayList<>();
		try {
			String sqlStatement = "select * from activities as a inner join participations as p on a.id = p.activityId where p.userId = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, id);
			
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
	
	public List<Activity> getLikeActivityById(String id) throws SQLException {
		List<Activity> activities = new ArrayList<>();
		try {
			String sqlStatement = "select * from activities as a inner join likes as l on a.id = l.activityId where l.userId = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, id);
			
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
	
	public User getUsersActivityById(String id) throws SQLException {
		User user = null;
		try {
			List<Activity> attend = getAttendActivityById(id);
			List<Activity> launch = getLaunchActivityById(id);
			List<Activity> like = getLikeActivityById(id);
			
			String sqlStatement = "select * from users where id = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, id);
			
			ResultSet rs = prepStmt.executeQuery();
			
			if(rs.next()) {
				user = new User(rs.getString(1), 
						rs.getString(2), rs.getString(3), rs.getString(4),
						rs.getString(5), rs.getString(6), attend, launch, like);
			}
			prepStmt.close();	
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return user;
	}
	
	public User login(String username, String password) throws SQLException {
		User user = null;
		try {
			String sqlStatement = "select id, name, gender, phone from users where username = ? and password = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, username);
			prepStmt.setString(2, password);
			
			ResultSet rs = prepStmt.executeQuery();
			
			if(rs.next()) {
				user = new User(rs.getString(1), rs.getString(2), null, null, rs.getString(3), rs.getString(4), null, null, null);
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return user;
	}
	
	public List<User> getParticipantsByActivityId(String id) throws SQLException {
		List<User> users = new ArrayList<>();
		try {
			String sqlStatement = "select u.id, u.name, u.gender from users as u inner join participations as p on u.id = p.userId where activityId = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, id);
			
			ResultSet rs = prepStmt.executeQuery();
			
			while(rs.next()) {
				User user = new User(rs.getString(1), rs.getString(2), null, null, rs.getString(3), null, null, null, null);
				users.add(user);
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return users;
	}
	
	public User getIdentificationByPassword(String id,String password) throws SQLException {
		User user = null;
		try {
			String sqlStatement = "select * from users where id = ? and password = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, id);
			prepStmt.setString(2, password);
			
			ResultSet rs = prepStmt.executeQuery();
			
			if(rs.next()) {
				user = new User(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), null, null, null);
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return user;
	}
	
	public void changePassword(String id, String newpassword) throws SQLException {
		try {
			String sqlStatement = "Update users set password = ? where id = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, newpassword);
			prepStmt.setString(2, id);
			prepStmt.execute();
			
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
	
}

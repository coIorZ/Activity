package database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

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
				user = new User(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6));
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
				user = new User(rs.getString(1), rs.getString(2), null, null, rs.getString(3), rs.getString(4));
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
				user = new User(rs.getString(1), rs.getString(2), null, null, rs.getString(3), rs.getString(4));
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return user;
	}
}

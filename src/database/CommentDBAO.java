package database;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CommentDBAO {
	Connection con;
	
	public CommentDBAO() throws Exception {
		try {
			DB db = new DB();
			con = db.getConnection();
		} catch (Exception e) {
			System.out.println("Exception in CommentDBAO: " + e);
			throw new Exception("Couldn't open connection to database: "
					+ e.getMessage());
		}
	}
	
	public List<Comment> getCommentsByActivityId(String id) throws SQLException {
		List<Comment> comments = new ArrayList<>();
		try {
			String sqlStatement = "select u.username,c.comment,c.createdAt, c.userId from comments as c inner join users as u on u.id = c.userId where c.activityId = ?";
			PreparedStatement prepStmt = con.prepareStatement(sqlStatement);
			prepStmt.setString(1, id);
			
			ResultSet rs = prepStmt.executeQuery();
			
			while(rs.next()) {
				Comment comment = new Comment(rs.getString(4), rs.getString(1), id, rs.getString(2), rs.getString(3));
				comments.add(comment);
			}
			prepStmt.close();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
		return comments;
	}
	
	public void createComment(Comment comment) throws SQLException {
		try {
			String sqlStatement = "insert into comments(userId,activityId,comment) values "
					+ "(?,?,?)";
			PreparedStatement preparedStatement = con.prepareStatement(sqlStatement);
			preparedStatement.setString(1, comment.getUserId());
			preparedStatement.setString(2, comment.getActivityId());
			preparedStatement.setString(3, comment.getComment());

	
			preparedStatement.execute();
		} catch(SQLException e) {
			e.printStackTrace();
			throw e;
		}
	}
}

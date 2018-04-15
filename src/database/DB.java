package database;

import java.sql.*;

public class DB {
	Connection con;
	
	public static String url = "jdbc:mysql://localhost:3306/activity";
    public static String dbdriver = "com.mysql.jdbc.Driver";
    public static String username = "root";
    public static String password = "";
    
    public DB() throws Exception {
    		try {
    			Class.forName(dbdriver);
    			con = DriverManager.getConnection(url, username, password);
    		} catch( Exception e) {
    			e.printStackTrace();
    		}
    }
    
    public Connection getConnection() {
    		return con;
    }
}

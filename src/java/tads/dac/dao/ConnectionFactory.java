package tads.dac.dao;

import java.sql.*;

public class ConnectionFactory {
    
    public static Connection getConnection ()
    throws ClassNotFoundException, SQLException {
            String connectionURL = "jdbc:mysql://localhost/dac";
            Connection connection = null; 
            Class.forName("com.mysql.jdbc.Driver"); 
            connection = DriverManager.getConnection(connectionURL, "root", "root");
            return connection;
    }
}

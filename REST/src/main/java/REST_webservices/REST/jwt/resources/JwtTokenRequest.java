package REST_webservices.REST.jwt.resources;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
    /*
    {
	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YW50ZSIsImV4cCI6MTYxNjY4ODk4NiwiaWF0IjoxNjE2MDg0MTg2fQ.zdq-8-z8D-RT0RO2eOwEgvw_cr4xgHTqa8ZURG23QFZUOX_2H_FMTKparhmoWkP1bjbFoTdwVWePooVjQB7zxQ"
	}
     */

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}


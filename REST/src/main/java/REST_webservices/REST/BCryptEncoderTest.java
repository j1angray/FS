package REST_webservices.REST;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptEncoderTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		for(int i=0; i<10; i++) {
			System.out.println(encoder.encode("1230"));
		}
	}

}

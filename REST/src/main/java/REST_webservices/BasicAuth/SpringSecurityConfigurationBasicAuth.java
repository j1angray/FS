package REST_webservices.BasicAuth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable() // disable CSRF
				.authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // enable all the OPTION
																						// requests without
																						// authentication
				.anyRequest().authenticated().and()
				// .formLogin().and()
				.httpBasic();
	}

}

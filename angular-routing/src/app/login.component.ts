import { Component, OnInit } from '@angular/core';
import { AuthService, ScopesBuilder, AuthConfig, TokenService } from 'spotify-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
  <span>Login with</span>
  <div class="img-container">
    <img src="assets/spotify.png" (click)="login()" />
  </div>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private tokenSvc: TokenService, private router: Router) { }

  ngOnInit() {
    if(!!this.tokenSvc.oAuthToken){
      this.router.navigate(['user']);
    }
  }

  public login(): void {
    const scopes = new ScopesBuilder().withScopes(ScopesBuilder.LIBRARY).build();
    const ac: AuthConfig = {
      client_id: "d6a2b4b0566b4f07a8c3c57e0b4167e2",  // WebPortal App Id. Shoud be config
      response_type: "token",
      redirect_uri: "https://4200-af7871bb-40d8-4bba-8fed-db7f252e7a50.ws-eu01.gitpod.io/",  // My URL
      state: "",
      show_dialog: true,
      scope: scopes
    };
    this.authService.configure(ac).authorize();
  }
}

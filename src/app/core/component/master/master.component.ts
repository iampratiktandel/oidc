import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  /** Data of logged in user */
  public loggedInUserData: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserData().subscribe((res) => {
      this.loggedInUserData = res;
    })
  }

  public logout() {
    this.authService.logout();
  }
}

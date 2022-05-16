import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  
  constructor(private authService: AuthenticationService) {
    
   }

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe((userInfo: any) => {
      console.log(userInfo);
    });
  }

}

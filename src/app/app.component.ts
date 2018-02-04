import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user: any;
  showMenu: boolean = false;

  constructor(private authService: AuthService) { 

  }

  ngOnInit(){
    
    this.authService.showMenu.subscribe(
      showM => this.showMenu = showM
    );
    
    this.authService.userMenu.subscribe(
      userM => this.user = userM
    );

    console.log(this.user);
    
    
  }
}

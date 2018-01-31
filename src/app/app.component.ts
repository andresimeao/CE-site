import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  showMenu: boolean = false;

  constructor(private authService: AuthService) { 

  }

  ngOnInit(){
    this.authService.showMenu.subscribe(
      showM => this.showMenu = showM
    );
  }
}

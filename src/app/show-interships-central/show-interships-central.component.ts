import { Component, OnInit } from '@angular/core';
import { IntershipService } from '../services/intership.service';

@Component({
  selector: 'app-show-interships-central',
  templateUrl: './show-interships-central.component.html',
  styleUrls: ['./show-interships-central.component.css']
})
export class ShowIntershipsCentralComponent implements OnInit {

  constructor(public intershipService: IntershipService) { }
interships:any = this.intershipService.interships;
  ngOnInit() {
    this.interships = this.intershipService.getIntershipsCentral();
    console.log(this.interships.key);
  }

}

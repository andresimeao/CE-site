import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-intership-detail',
  templateUrl: './intership-detail.component.html',
  styleUrls: ['./intership-detail.component.css']
})
export class IntershipDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
id:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  
}

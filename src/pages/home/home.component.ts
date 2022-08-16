import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/models/global.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private globalServce: GlobalService) { }

  ngOnInit() {
  }

  handleEnterClicked(userType: UserType){
    this.globalServce.userEnterEvent(userType);
  }

}

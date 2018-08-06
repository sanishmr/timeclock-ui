import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public clocks;

  constructor( private clockService: ClockService) { 

  }

  ngOnInit() {
    this.getClocks();
  }

  getClocks()
  {
    this.clockService.getClocks().subscribe(
      data=> {this.clocks = data},
      err => console.error(err),
      () => console.log('clocks loaded')
            );
  }

}

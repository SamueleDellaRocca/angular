import { Component, OnInit } from '@angular/core';
import { OpentableService } from './opentable.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';
  page = 1;
  rows = 11;

  ristoranti: any;

  constructor(private opentable: OpentableService) { }


  ngOnInit() {
    this.opentable.getPosts(this.page, this.rows)
      .subscribe(response => {
        this.ristoranti = response;
        console.log(this.ristoranti.array);
      });
  }

  onPageChange(event: any) {
    console.log(event);
    this.page = event.page;
    this.rows = event.rows;

    this.opentable.getPosts(this.page, this.rows)
      .subscribe(response => {
        this.ristoranti = response;
      });
  }
}

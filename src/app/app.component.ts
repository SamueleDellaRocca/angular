import { Component, OnInit } from '@angular/core';
import { OpentableService } from './opentable.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';


  ristoranti: any;

  constructor(private opentable: OpentableService) { }


  ngOnInit() {
    this.opentable.getPosts()
      .subscribe(response => {
        this.ristoranti = response;
        console.log(this.ristoranti.array);
      });
  }
}

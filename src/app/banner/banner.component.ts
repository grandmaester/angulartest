import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.makeBorders();
  }
  makeBorders() {
    var borderString =
      "<div style='position: relative;border: 1px solid black;margin: 15px'>";
    for (let i = 1; i <= 3; i++) {
      borderString += borderString;
    }
    borderString += `<div style='height: 50px;position: relative;animation: mymove 10s linear infinite;'>A floating banner text which keeps on rotating</div>`;
    for (let i = 1; i <= 3; i++) {
      borderString += '</div>';
    }
    document.getElementById('borders').innerHTML = borderString;
  }
}

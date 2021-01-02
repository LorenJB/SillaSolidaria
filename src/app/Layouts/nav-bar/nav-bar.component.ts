import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prot-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styles: [`
    .bott-0{
      bottom: 0;
    }
  `]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

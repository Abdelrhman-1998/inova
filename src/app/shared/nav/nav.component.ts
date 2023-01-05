import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  openNav:boolean=false;

  constructor() { }
  language:string='العربية'
  ngOnInit(): void {
  }
  toggleNav(){
    this.openNav=!this.openNav;
  }

}

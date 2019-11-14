import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  ngOnInit() {
  }

}

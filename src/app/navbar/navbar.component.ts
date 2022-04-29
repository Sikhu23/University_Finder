import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isloggedin:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChange(){
    if(localStorage.token)
    {
      this.isloggedin=true
    }
    else{
      this.isloggedin=false
    }

  }

  logout(){
    localStorage.clear();
  }

}

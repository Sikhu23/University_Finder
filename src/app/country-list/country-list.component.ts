import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  searchedCountry:String


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.searchedCountry)
    if(this.searchedCountry){
      this.router.navigate(['/search'],{queryParams:{c:this.searchedCountry}})
    }
  }

}

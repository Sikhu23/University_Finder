import { ApisService } from './../apis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colglist',
  templateUrl: './colglist.component.html',
  styleUrls: ['./colglist.component.css']
})
export class ColglistComponent implements OnInit {
colglist:any;
  constructor(private route:ActivatedRoute,private service:ApisService) {
    this.route.queryParams.subscribe((response:any)=>{
      console.log(response)
      this.service.getColgList(response.c).subscribe((response)=>{
        console.log(response);
        this.colglist=response

      })
    })
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
interface  data{
  name:string;
  logo_img_url:string;
  description:string;
}
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }
  baseUrl:string='https://staging.algym.com/api/v1/gyms?lat=31.2443512&long=29.9715685&page_number=1&page_size=1000000&search_diameter=1000';
  searchFilter:string='gyms';
  data:data[]=[];
  p: number = 1;

  ngOnInit(): void {
    this.http.get<{data:data[]}>(this.baseUrl).subscribe((res)=>{
      this.data=res.data;
      console.log(res)
    })
  }
  listView:boolean=false;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  toggleListView(){
    this.listView=!this.listView;
  }

}

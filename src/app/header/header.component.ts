import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CardComponent,NgFor,HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public HotelList: any=[];

  constructor(private http:HttpClient ){

  }

  ngOnInit(): void {
    this.loadHotelInfo();
  }
  loadHotelInfo(){
    this.http.get("http://localhost:8080/get-all-hotel")
    .subscribe(data=>{
      this.HotelList=data;
      console.log(this.HotelList);
      
    })
  }

}

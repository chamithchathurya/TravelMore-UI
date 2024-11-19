import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { VillaCardComponent } from '../card/villa-card/villa-card.component';
import { RestaurentCardComponent } from '../card/restaurent-card/restaurent-card.component';
import { ApartmentCardComponent } from '../card/apartment-card/apartment-card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CardComponent,NgFor,HttpClientModule,VillaCardComponent,RestaurentCardComponent,ApartmentCardComponent],
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
  //search form functions

  searchDetails={
    category:"",
    location:"",
    price:0
  }

  

}

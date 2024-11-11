import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

public hotelList: any=[];

constructor(private http: HttpClient){}

 ngOnInit(): void {
  this.loadHotelInfo();
 }



 loadHotelInfo(){
  this.http.get("http://localhost:8080/get-all-hotel")
  .subscribe(data=>{
    this.hotelList=data;
    console.log(this.hotelList);
    
  })
}



}

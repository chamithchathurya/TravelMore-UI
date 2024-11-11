import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurent-card',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './restaurent-card.component.html',
  styleUrl: './restaurent-card.component.css'
})
export class RestaurentCardComponent implements OnInit {

  public restaurentList: any=[];

constructor(private http: HttpClient){}

 ngOnInit(): void {
  this.loadRestaurentInfo();
 }



 loadRestaurentInfo(){
  this.http.get("http://localhost:8080/get-all-restaurent")
  .subscribe(data=>{
    this.restaurentList=data;
    console.log(this.restaurentList);
    
  })
}

}

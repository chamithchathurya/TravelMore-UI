import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartment-card',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './apartment-card.component.html',
  styleUrl: './apartment-card.component.css'
})
export class ApartmentCardComponent implements OnInit {

  public apartmentList: any=[];

constructor(private http: HttpClient){}

 ngOnInit(): void {
  this.loadApartmentInfo();
 }



 loadApartmentInfo(){
  this.http.get("http://localhost:8080/get-all-apartment")
  .subscribe(data=>{
    this.apartmentList=data;
    console.log(this.apartmentList);
    
  })
}

}

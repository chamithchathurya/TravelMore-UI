import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-hotel.component.html',
  styleUrl: './add-hotel.component.css'
})
export class AddHotelComponent {

  constructor(private http: HttpClient){

  }

  public hotel={
    name: null,
    description: null,
    price:null,
    location:null,
    amenities: {
      wifi: false,
      parking: false,
      pool: false,
      gym: false,
      ac: false
    }
  }
  
  add(){
    console.log(this.hotel);
    this.http.post("http://localhost:8080/add-hotel",this.hotel).subscribe(data=>{
      alert("Hotel Added")
    })
    
  }

}

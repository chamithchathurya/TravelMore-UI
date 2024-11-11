import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-resturant',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-resturant.component.html',
  styleUrl: './add-resturant.component.css'
})
export class AddResturantComponent {

  constructor(private http: HttpClient){

  }

  public restaurent={
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
    console.log(this.restaurent);
    this.http.post("http://localhost:8080/add-restaurent",this.restaurent).subscribe(data=>{
      alert("Restaurent Added")
    })
    
  }

}

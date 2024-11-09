import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-add-apartment',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-apartment.component.html',
  styleUrl: './add-apartment.component.css'
})
export class AddApartmentComponent {

  constructor(private http: HttpClient){

  }

  public apartment={
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
    console.log(this.apartment);
    this.http.post("http://localhost:8080/add-apartment",this.apartment).subscribe(data=>{
      alert("Apartment Added")
    })
    
  }

 
}



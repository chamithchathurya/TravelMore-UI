import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-villa',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-villa.component.html',
  styleUrl: './add-villa.component.css'
})
export class AddVillaComponent {
  constructor(private http: HttpClient){

  }

  public villa={
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
    console.log(this.villa);
    this.http.post("http://localhost:8080/add-villa",this.villa).subscribe(data=>{
      alert("Villa Added")
    })
    
  }

}

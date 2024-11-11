import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-villa-card',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './villa-card.component.html',
  styleUrl: './villa-card.component.css'
})
export class VillaCardComponent {

  public villaList: any=[];

constructor(private http: HttpClient){}

 ngOnInit(): void {
  this.loadVillaInfo();
 }



 loadVillaInfo(){
  this.http.get("http://localhost:8080/get-all-villa")
  .subscribe(data=>{
    this.villaList=data;
    console.log(this.villaList);
    
  })
}

}

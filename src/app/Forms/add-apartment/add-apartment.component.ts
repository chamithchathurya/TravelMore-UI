import { Component } from '@angular/core';
import { PropertyListComponent } from '../../property-list/property-list.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-apartment',
  standalone: true,
  imports: [PropertyListComponent,ReactiveFormsModule,HttpClientModule],
  templateUrl: './add-apartment.component.html',
  styleUrl: './add-apartment.component.css'
})
export class AddApartmentComponent {

  apartmentForm: FormGroup;
  selectedFiles: File[]=[];
  
  constructor(private fb:FormBuilder,private http:HttpClient){
    this.apartmentForm=this.fb.group({
      apartmentName: [''],
      description: [''],
      price: [''],
      location: [''],
      amenities: this.fb.group({
        wifi: [false],
        parking: [false],
        pool: [false],
        gym: [false],
        ac: [false]
      }),
    });

  }
  onFileChange(event: any) {
    this.selectedFiles = event.target.files;
  }

  onSubmit() {
    const formData = new FormData();
    Object.keys(this.apartmentForm.value).forEach(key => {
      formData.append(key, this.apartmentForm.value[key]);
    });
    
    // Append files to formData
    Array.from(this.selectedFiles).forEach(file => {
      formData.append('images', file);
    });

    this.http.post('http://localhost:8080/api/apartments', formData)
      .subscribe(response => console.log(response));
  }

}

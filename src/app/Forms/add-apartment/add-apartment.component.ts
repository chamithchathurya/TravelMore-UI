import { Component } from '@angular/core';
import { PropertyListComponent } from '../../property-list/property-list.component';

@Component({
  selector: 'app-add-apartment',
  standalone: true,
  imports: [PropertyListComponent],
  templateUrl: './add-apartment.component.html',
  styleUrl: './add-apartment.component.css'
})
export class AddApartmentComponent {

}

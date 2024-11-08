import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AddApartmentComponent } from '../Forms/add-apartment/add-apartment.component';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  constructor(private router: Router) {}

  navigateToAddApartment() {
    this.router.navigate(['add-apartment-form']);
  }
  navigateToAddVilla() {
    this.router.navigate(['add-villa-form']);
  }
  navigateToAddHotel() {
    this.router.navigate(['add-hotel-form']);
  }
  navigateToAddResturent() {
    this.router.navigate(['add-resturent-form']);
  }

}

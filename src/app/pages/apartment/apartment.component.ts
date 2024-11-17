import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { CardComponent } from '../../card/card.component';
import { ApartmentCardComponent } from '../../card/apartment-card/apartment-card.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';

@Component({
  selector: 'app-apartment',
  standalone: true,
  imports: [NavbarComponent,CardComponent,ApartmentCardComponent,SidebarComponent],
  templateUrl: './apartment.component.html',
  styleUrl: './apartment.component.css'
})
export class ApartmentComponent {

}

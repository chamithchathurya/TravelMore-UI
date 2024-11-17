import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { CardComponent } from '../../card/card.component';
import { RestaurentCardComponent } from '../../card/restaurent-card/restaurent-card.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';

@Component({
  selector: 'app-resturant',
  standalone: true,
  imports: [NavbarComponent,CardComponent,RestaurentCardComponent,SidebarComponent],
  templateUrl: './resturant.component.html',
  styleUrl: './resturant.component.css'
})
export class ResturantComponent {

}

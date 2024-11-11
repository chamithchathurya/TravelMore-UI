import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { CardComponent } from '../../card/card.component';
import { RestaurentCardComponent } from '../../card/restaurent-card/restaurent-card.component';

@Component({
  selector: 'app-resturant',
  standalone: true,
  imports: [NavbarComponent,CardComponent,RestaurentCardComponent],
  templateUrl: './resturant.component.html',
  styleUrl: './resturant.component.css'
})
export class ResturantComponent {

}

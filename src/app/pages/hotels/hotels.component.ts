import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [NavbarComponent,CardComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {

}

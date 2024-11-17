import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { CardComponent } from '../../card/card.component';
import { VillaCardComponent } from '../../card/villa-card/villa-card.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';

@Component({
  selector: 'app-villas',
  standalone: true,
  imports: [NavbarComponent,CardComponent,VillaCardComponent,SidebarComponent],
  templateUrl: './villas.component.html',
  styleUrl: './villas.component.css'
})
export class VillasComponent {

}

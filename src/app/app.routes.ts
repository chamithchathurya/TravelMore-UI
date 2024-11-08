import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { ApartmentComponent } from './pages/apartment/apartment.component';
import { ResturantComponent } from './pages/resturant/resturant.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { VillasComponent } from './pages/villas/villas.component';
import { AddApartmentComponent } from './Forms/add-apartment/add-apartment.component';
import { AddHotelComponent } from './Forms/add-hotel/add-hotel.component';
import { AddResturantComponent } from './Forms/add-resturant/add-resturant.component';
import { AddVillaComponent } from './Forms/add-villa/add-villa.component';

export const routes: Routes = [
    {
        path:"resturent",
        component:ResturantComponent
    },
    {
        path:"hotel",
        component:HotelsComponent
    },
    {
        path:"apartment",
        component:ApartmentComponent
    },
    {
        path:"villa",
        component:VillasComponent
    },
    {
        path:"",
        component:HeaderComponent
    },
    {
        path:"property-list",
        component:PropertyListComponent,
    },
    {
        path:"add-apartment-form",
        component:AddApartmentComponent
    },
    {
        path:"add-villa-form",
        component:AddVillaComponent
    },
    {
        path:"add-resturent-form",
        component:AddResturantComponent
    },
    {
        path:"add-hotel-form",
        component:AddHotelComponent
    }
    
    
];

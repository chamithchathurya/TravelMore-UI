import { Routes } from '@angular/router';
import { ResturantComponent } from './pages/resturant/resturant.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { VillasComponent } from './pages/villas/villas.component';
import { HeaderComponent } from './header/header.component';
import { PropertyListComponent } from './property-list/property-list.component';

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
        component:HotelsComponent
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
        component:PropertyListComponent
    }
];

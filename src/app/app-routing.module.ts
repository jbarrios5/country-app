import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContacPageComponent } from './shared/pages/contact-page/contac-page.component';

const routes: Routes = [
    
    {
        path:'about',
        component: AboutPageComponent
    },
    {
        path:'contact',
        component: ContacPageComponent
    },
    {
        path:'countries',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
    },
    {
        path: '**',
        redirectTo:'countries'
    }
  
    
   
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class RoutingModule { }

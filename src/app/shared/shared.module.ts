import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RoutingModule } from '../app-routing.module';
import { ContacPageComponent } from './pages/contact-page/contac-page.component';
import { SearchBoxComponent } from './components/searchBox/search-box.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [HomePageComponent,AboutPageComponent,SidebarComponent,SearchBoxComponent],
    declarations: [HomePageComponent, AboutPageComponent, SidebarComponent, ContacPageComponent,SearchBoxComponent],
    providers: [],
})
export class SharedModule { }

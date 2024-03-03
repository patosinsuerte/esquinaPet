import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AboutComponent } from './pages/about/about.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        LayoutPageComponent,
        AboutComponent,
        OurServicesComponent,
        HomeComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        SharedModule,
        MaterialModule
    ],
})
export class CoreModule { }

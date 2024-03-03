import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [

            {
                path: 'nosotros',
                component: AboutComponent
            },
            {
                path: 'servicios',
                component: OurServicesComponent
            },
            {
                path: 'contacto',
                component: ContactComponent
            },
            {
                path: '',
                component: HomeComponent
            },

        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }

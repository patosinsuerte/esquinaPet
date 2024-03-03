import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
    declarations: [
        Error404PageComponent,
        HeaderComponent,
        FooterComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        Error404PageComponent,
        HeaderComponent,
        FooterComponent,
        BannerComponent
    ]
})
export class SharedModule { }

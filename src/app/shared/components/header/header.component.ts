import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    public isActive: boolean = false;
    public opacity: boolean = false;

    public onActivateNavBar(): void {
        this.isActive = !this.isActive;
        this.opacity = !this.opacity;
    }

    public offNavBar(): void {
        this.isActive = false;
        this.opacity = false;
    }


    // hide nav and opacity when user click outside of the lateral menu
    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
        if (!this.isActive) {
            return;
        }
        const targetElement = event.target as HTMLElement;
        if (targetElement.closest('.menu-opacity')) {
            this.isActive = false;
            this.opacity = false;
        }
    }










}

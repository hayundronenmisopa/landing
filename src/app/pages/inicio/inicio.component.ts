import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

@Component({
    selector: 'inicio',
    standalone: true,
    imports: [
      CommonModule
    ],
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.scss'
})
export class InicioComponent {
    isScrolled = false; // Variable para detectar si el usuario ha hecho scroll

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 50;
    }
}

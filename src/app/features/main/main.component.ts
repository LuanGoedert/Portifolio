import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
    selector: 'app-main-page',
    standalone: true,                 // <-- important for standalone apps
    imports: [
        CommonModule,
        HomeComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        FooterComponent],          // <-- allows *ngIf, *ngFor, etc. if needed
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent { }

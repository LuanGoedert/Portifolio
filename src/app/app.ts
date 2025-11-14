import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './core/components/navbar/navbar.component'; 
import { MainComponent } from './features/main/main.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MainComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}

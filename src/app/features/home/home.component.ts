import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,                 
  imports: [CommonModule],          
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
   public openLink(url: string): void {
    window.open(url, '_blank');
  }
}
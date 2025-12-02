import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-popup',
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  visible = false;
  message = '';

  constructor(private cdr: ChangeDetectorRef) {}

  show(msg: string) {
    this.message = msg;
    this.visible = true;
    this.cdr.detectChanges(); 

    // auto-hide after 2 seconds
    setTimeout(() => {
      this.visible = false;
      this.cdr.detectChanges(); 
    }, 2000);
  }
}

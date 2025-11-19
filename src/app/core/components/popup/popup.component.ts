import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',

  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  
  visible = false;
  message = '';

  public show(msg: string) {
    this.message = msg;
    this.visible = true;

    // Hide after 2 seconds
    setTimeout(() => {
      this.visible = false;
    }, .2);
  }
}

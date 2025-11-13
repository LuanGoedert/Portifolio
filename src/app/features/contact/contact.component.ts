import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  message = '';

  sendEmailMessage() {
    if (!this.message.trim()) return; // Ignore empty messages    

    const email = "luangoedert336@gmail.com";
    const subject = "Portfolio Contact Message";
    const body = encodeURIComponent(this.message);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  onInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  public openLink(url: string): void {
    window.open(url, '_blank');
  }

}

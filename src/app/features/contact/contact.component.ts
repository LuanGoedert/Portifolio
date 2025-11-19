import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { PopupComponent } from '../../core/components/popup/popup.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [FormsModule, PopupComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @ViewChild('emailArea') emailArea: any;

  message = '';

  sendEmailMessage(popup: PopupComponent) {
    if (!this.message.trim()) return;

    const templateParams = {
      message: this.message,
      reply_to: 'luangoedert336@gmail.com',
    };

    popup.show('Message sent!');
    console.log('sendEmailMessage called');        // DEBUG

    emailjs
      .send(
        'service_0ltpqc5',
        'template_cp8drja',
        templateParams,
        '5-rp1Uwakg1W_xZUW'
      )
      .then((res) => {
        // DEBUG
        popup.show('Failed to send. Try again later.');
        this.message = '';
        this.emailArea.nativeElement.value = '';
      })
      .catch((err) => {
        console.log('emailjs error', err);         // DEBUG
        popup.show('Failed to send. Try again later.');
        // or alert(...)
      });
  }

  onInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  public openLink(url: string): void {
    window.open(url, '_blank');
  }

  async downloadResume() {
    const response = await fetch("assets/LuanGoedert-EngineerResume.pdf");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "LuanGoedert-EngineerResume.pdf";
    a.click();

    URL.revokeObjectURL(url);
  }
}

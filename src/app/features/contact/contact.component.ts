import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

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
    if (!this.message.trim()) return;

    const templateParams = {
      message: this.message,
      reply_to: 'luangoedert336@gmail.com',
    };

    emailjs
      .send(
        'service_0ltpqc5',   // e.g. 'service_xxxxxx'
        'template_cp8drja',  // e.g. 'template_yyyyyy'
        templateParams,
        '5-rp1Uwakg1W_xZUW'    // 👈 the one you just copied
      )
      .then((res) => {
        console.log('EmailJS SUCCESS:', res);
        alert('Message sent!');
      })
      .catch(() => {
        alert('Failed to send message. Please try again later.');
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

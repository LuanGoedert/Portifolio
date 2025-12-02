import { Component, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
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
export class ContactComponent implements AfterViewInit {

  @ViewChild('emailArea') emailArea!: ElementRef<HTMLTextAreaElement>;
  @ViewChild(PopupComponent) popup!: PopupComponent;

  message = '';

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
  }

  popupTest() {
    this.popup.show('Test popup!');
  }

  async sendEmailMessage() {
    if (!this.message.trim()) {
      this.popup.show('Please type a message first.');
      return;
    }

    const templateParams = {
      message: this.message,
      reply_to: 'luangoedert336@gmail.com',
    };


    const result = await emailjs.send(
      'service_0ltpqc5',
      'template_cp8drja',
      templateParams,
      '5-rp1Uwakg1W_xZUW'
    );
    console.log('sent', result);
    if (result.status === 200) {
      this.popup.show('Message sent!');
      this.message = '';
      this.emailArea.nativeElement.value = '';
    }
    else {
      this.popup.show('Failed to send. Try again later.');
    }
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
    const response = await fetch('assets/LuanGoedert-EngineerResume.pdf');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'LuanGoedert-EngineerResume.pdf';
    a.click();

    URL.revokeObjectURL(url);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,                // <-- important
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})


export class NavbarComponent {
  myAge = this.getAge('1996-11-18');
  gamesDelivered = 1;
  email = 'luangoedert336@gmail.com';
  location = 'Brazil';

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  getAge(birthdate: string): number {
    const today = new Date();
    const birthday = new Date(birthdate);

    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();

    // If birthday hasn't happened yet this year, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }
}
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { start } from 'node:repl';

@Component({
  selector: 'app-navbar',
  standalone: true,                // <-- important
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [DatePipe],
})


export class NavbarComponent {
  programmingSoftwareSince = new Date('2020-09-09');
  programmingGamesSince = new Date('2023-01-10');
  gameDeveloperXp = this.getDaysAsXP(this.programmingGamesSince);
  softwareDeveloperXP = this.getDaysAsXP(this.programmingSoftwareSince);
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

  getDaysAsXP(startingDate: Date): number {
    const today = new Date();

    const monthNow = today.getMonth();
    const yearNow = today.getFullYear();

    const monthStart = startingDate.getMonth();
    const yearStart = startingDate.getFullYear();

    const yearsOfXp = yearNow - yearStart;
    const monthsOfXp = (monthNow - monthStart) * .1;
    return (yearsOfXp + monthsOfXp) * 1000;
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
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class Tab1Page implements OnInit {
  name: string | null = null;
  surname: string | null = null;
  showLogin: boolean = false;
  items: string[] = [];
  itemCount: number = 20;

  constructor(private router: Router, private http: HttpClient, private UserService: UserService) {}

  ngOnInit() {
    // Recuperar el nombre de usuario del almacenamiento local
    const storedName = localStorage.getItem('name');
    const storedSurname = localStorage.getItem('surname');
    if (storedName !== null && storedSurname !== null) {
      this.name = storedName;
      this.surname = storedSurname;
    }
    console.log(this.name);
    this.loadInitialItems();

    // Escuchar los cambios en el local storage
    window.addEventListener('storage', (event) => {
      if (event.key === 'name' || event.key === 'surname') {
        this.name = localStorage.getItem('name');
        this.surname = localStorage.getItem('surname');
      }
    });
  }

  goToMoreInfo(event: Event) {
    event.stopPropagation(); // Para evitar que se dispare el click del card
    this.router.navigate(['user-info']);
  }

  goToSurveysviews() {
    this.router.navigate(['survey-views']);
  }

  goToTasksviews() {
    this.router.navigate(['tasks-views']);
  }

  loadInitialItems() {
    for (let i = 0; i < this.itemCount; i++) {
      this.items.push(`Item ${i + 1}`);
    }
  }

  loadMoreItems(event: CustomEvent) {
    setTimeout(() => {
      for (let i = 0; i < this.itemCount; i++) {
        this.items.push(`Item ${this.items.length + 1}`);
      }
      (event.target as HTMLIonInfiniteScrollElement).complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll if necessary
      if (this.items.length >= 100) {
        (event.target as HTMLIonInfiniteScrollElement).disabled = true;
      }
    }, 500);
  }
}
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ApartmentService } from '../services/apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule,FormsModule,ApartmentComponent],
  providers: [ApartmentService]
})
export class ApartmentComponent  {

  
  ApartmentService = inject(ApartmentService);

  apartmentVisible: boolean = false;
  
  apartment:any;


  constructor(private router: Router) { }

  

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToApartment() {
    this.apartmentVisible = true;
  }

  saveChanges() {
    //Logica que creea el apartamento
    this.ApartmentService.createApartment(this.apartment).subscribe((createdApartment) => {
      console.log('Nuevo apartamento creado:', createdApartment);
      this.apartment = createdApartment;
    });
    // Lógica para guardar los cambios del apartamento
    this.ApartmentService.updateApartment(this.apartment).subscribe((updatedApartment) => {
      console.log('Apartamento actualizado:', updatedApartment);
      this.apartment = updatedApartment;
    });

    //Logica para buscar un apartmento por nombre de apartment
    this.ApartmentService.getApartmentByName(this.apartment.name).subscribe((apartment) => {
      console.log('Apartamento encontrado:', apartment);
      this.apartment = apartment;
    });
  }

  

}

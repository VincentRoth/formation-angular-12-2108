import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  animal?: Animal;

  constructor() { }

  ngOnInit(): void {
    this.animal = {
      name: "Michat",
      species: "dog",
      veterinarian: 'vet',
      comment: 'comment',
      email: 'email',
      phoneNumber: 'phoneNumber'
    }
  }

}

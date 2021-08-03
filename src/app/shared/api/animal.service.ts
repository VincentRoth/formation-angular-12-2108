import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable()
export class AnimalService {

  constructor() { }

  get(): Animal {
    return {
      name: "Michat (service)",
      species: "dog",
      veterinarian: 'vet',
      comment: 'comment',
      email: 'email@test.com',
      phoneNumber: 'phoneNumber'
    };
  }

  getAll(): Animal[] {
    return [
      {
        name: "Michat 1",
        species: "dog",
        veterinarian: 'vet',
        comment: 'comment',
        email: 'email',
        phoneNumber: 'phoneNumber'
      },
      {
        name: "Michat 2",
        species: "dog",
        veterinarian: 'vet',
        comment: 'comment',
        email: 'email',
        phoneNumber: 'phoneNumber'
      }
    ]
  }
}

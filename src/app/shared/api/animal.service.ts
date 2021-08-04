import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable()
export class AnimalService {
  constructor() {}

  get(): Animal {
    ''.replace(/\./g, ' ');
    return {
      name: 'Michat (service)',
      species: 'dog',
      veterinarian: 'vet',
      comment: 'comment',
      email: 'email@test.com',
      phoneNumber: '06.12.34.56.78',
    };
  }

  getAll(): Animal[] {
    return [
      {
        name: 'Michat 1',
        species: 'dog',
        veterinarian: 'vet',
        comment: 'comment',
        email: 'email',
        phoneNumber: '06.12.34.56.78',
      },
      {
        name: 'Michat 2',
        species: 'dog',
        veterinarian: 'vet',
        comment: 'comment',
        email: 'email',
        phoneNumber: '06.12.34.56.78',
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.animalService.get(Number(id)).subscribe((data) => {
        this.formGroup = new FormGroup({
          comment: new FormControl(data.comment),
          email: new FormControl(data.email),
          name: new FormControl(data.name, [
            Validators.required,
            Validators.minLength(4),
          ]),
          phone: new FormControl(data.phoneNumber),
          species: new FormControl(data.species, Validators.required),
          veterinarian: new FormControl(data.veterinarian, Validators.required),
        });
      });
    } else {
      this.formGroup = new FormGroup({
        comment: new FormControl(),
        email: new FormControl(),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        phone: new FormControl(),
        species: new FormControl('', Validators.required),
        veterinarian: new FormControl('', Validators.required),
      });
    }
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const model = this.formGroup.value;
      model.phoneNumber = model.phone;
      delete model.phone;

      if (model.id) {
        this.animalService.update(model).subscribe(() => {
          this.router.navigate(['/animals']);
        });
      } else {
        this.animalService.create(model).subscribe(() => {
          this.router.navigate(['/animals']);
        });
      }
    }
  }
}

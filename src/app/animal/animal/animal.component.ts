import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit, OnDestroy {
  animal?: Animal;
  private susbcription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.susbcription = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        const id = Number(params.get('id'));

        this.animalService.get(id).subscribe((data) => {
          this.animal = data;
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.susbcription?.unsubscribe();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from './animal/animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalListComponent,
    AnimalItemComponent,
    AnimalRootComponent,
    AnimalFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnimalRoutingModule,
    ReactiveFormsModule
  ],
})
export class AnimalModule {}

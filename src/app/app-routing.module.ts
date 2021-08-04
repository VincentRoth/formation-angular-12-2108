import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AnimalComponent } from './animal/animal/animal.component';

const routes: Routes = [
  { path: '', component: AnimalListComponent },
  { path: 'animals/:id', component: AnimalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

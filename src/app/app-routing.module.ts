import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'animals', pathMatch: 'full' },
  {
    path: 'vet',
    loadChildren: () =>
      import('./vet/vet.module').then(
        (moduleTypeScript) => moduleTypeScript.VetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

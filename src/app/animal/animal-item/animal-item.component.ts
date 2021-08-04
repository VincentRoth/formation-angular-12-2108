import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent {
  @Input() model!: Animal;
  @Output() deletion = new EventEmitter<Animal>();

  delete(event: Event): void {
    console.log(event);
    this.deletion.emit(this.model);
  }
}

import { Component, Input } from '@angular/core';
import { PhotoAlbum } from 'src/app/domain';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
})
export class PhotoCardComponent {
  @Input() photo: PhotoAlbum | null = null;

  constructor() {}
}

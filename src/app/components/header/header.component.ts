import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
})
export class Header {
  title = 'Desafio Teia';
  subtitle =
    'Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.';
}

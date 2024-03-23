import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title = 'Desafio Teia'
  subtitle = 'Clique/Toque na thumbnail para ampliar.'
}

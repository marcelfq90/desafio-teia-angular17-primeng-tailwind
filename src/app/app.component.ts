import { Component, Input, OnDestroy } from '@angular/core'
import { HomeComponent } from './page/home/home.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HomeComponent]
})
export class AppComponent {}

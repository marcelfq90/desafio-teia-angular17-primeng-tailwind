import { Component } from '@angular/core'
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router'
import { ProgressBarModule } from 'primeng/progressbar'
import { ScrollTopModule } from 'primeng/scrolltop'
import { HeaderComponent } from 'src/app/components/header/header.component'
import { LoadingComponent } from 'src/app/components/loading/loading.component'
import { PhotoAlbumComponent } from 'src/app/components/photo-album/photo-album.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PhotoAlbumComponent,
    HeaderComponent,
    ScrollTopModule,
    LoadingComponent,
    ProgressBarModule
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  progressValue = 0
  progressColor = 'primary'
  progressTimer: any
  stopProgress = false

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationObserver(event)
    })
  }

  private loading(): void {
    if (this.progressValue >= 95 || this.stopProgress) {
      clearInterval(this.progressTimer)
    } else {
      this.progressValue++
    }
  }

  private navigationObserver(event: Event): void {
    if (event instanceof NavigationStart) {
      this.progressTimer = setInterval(() => {
        this.loading()
      }, 100)
    }

    if (event instanceof NavigationEnd) {
      this.progressValue = 100

      if (event instanceof NavigationCancel) {
        this.stopProgress = true
        this.progressColor = 'accent'
      }

      if (event instanceof NavigationError) {
        this.stopProgress = true
        this.progressColor = 'warn'
      }
    }
  }
}

import { Component, Input } from '@angular/core'
import { ProgressBarModule } from 'primeng/progressbar'

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './loading.component.html'
})
export class LoadingComponent {
  @Input() progressValue!: number
}

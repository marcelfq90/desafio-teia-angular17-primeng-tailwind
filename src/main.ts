import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideRouter, Routes } from '@angular/router'
import { importProvidersFrom } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/app.component').then((mod) => mod.AppComponent)
  }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom([BrowserAnimationsModule, HttpClientModule])
  ]
}).catch((err) => console.error(err))

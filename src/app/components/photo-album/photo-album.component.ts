import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { PhotoAlbum } from 'src/app/domain'
import { PhotoService } from 'src/app/services/photo.service'
import { Table as TableType } from 'primeng/table'
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete'

import { TableModule } from 'primeng/table'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { FormsModule } from '@angular/forms'
import { CardModule } from 'primeng/card'
import { AnimateOnScrollModule } from 'primeng/animateonscroll'
import { CommonModule } from '@angular/common'
import { TagModule } from 'primeng/tag'
import { DialogModule } from 'primeng/dialog'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { AutoCompleteModule } from 'primeng/autocomplete'

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule,
    AnimateOnScrollModule,
    CommonModule,
    TagModule,
    DialogModule,
    ProgressSpinnerModule,
    AutoCompleteModule
  ]
})
export class PhotoAlbumComponent implements OnInit {
  @ViewChild('data') data!: TableType
  @ViewChild('inputField') inputField!: ElementRef

  albums: PhotoAlbum[] = []
  copyAlbums: PhotoAlbum[] = []
  searchTerm: string = ''
  sortingOptions = ['albumId', 'id', 'title']
  selectedSortingOption: string = ''
  headers = ['title', 'thumbnailUrl']
  loading = false
  visible = false
  currentImageObject: PhotoAlbum = {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  }
  totalGroupItems = 0

  suggestions: any[] = []
  filteredItemsSelect: any[] = []
  selectedItems: any[] | undefined

  constructor(private photoService: PhotoService) {}

  search(event: AutoCompleteCompleteEvent) {
    const filterValue = Number(event.query)

    this.suggestions = this.copyAlbums.find(
      (obj) => obj.albumId === filterValue
    )
      ? [String(filterValue)]
      : []
  }

  onAlbumIdSelect(): void {
    if (this.selectedItems && this.selectedItems.length > 0) {
      const selectedAlbumIds = this.selectedItems.map(Number)
      this.albums = this.copyAlbums.filter((album) =>
        selectedAlbumIds.includes(album.albumId)
      )
    } else {
      this.albums = this.copyAlbums
    }
  }

  ngOnInit(): void {
    this.loading = true
    try {
      this.photoService.getPhotos().subscribe((photos) => {
        this.albums = photos
        this.copyAlbums = photos
      })
    } finally {
      this.loading = false
    }
  }

  clear(table: TableType) {
    table.clear()
    this.inputField.nativeElement.value = ''
    this.selectedItems = undefined
    this.albums = this.copyAlbums
  }

  showDialog(currentImageObject: PhotoAlbum) {
    this.visible = !this.visible
    this.currentImageObject = currentImageObject
  }

  filterData(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
    this.data.filterGlobal(filterValue, 'contains')
  }

  getGroup(albums: PhotoAlbum) {
    let albumIdColor = albums.albumId
    let hue1 = (albumIdColor * 137.508) % 360
    let hue2 = (hue1 + 50) % 360

    let color1 = `hsl(${hue1}, 70%, 50%)`
    let color2 = `hsl(${hue2}, 70%, 50%)`

    return {
      background: `linear-gradient(-225deg, ${color1}, ${color2})`
    }
  }
}

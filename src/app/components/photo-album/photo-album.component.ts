import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PhotoAlbum } from 'src/app/domain';
import { PhotoService } from 'src/app/services/photo.service';
import { Table as TableType } from 'primeng/table';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css'],
})
export class PhotoAlbumComponent implements OnInit {
  @ViewChild('data') data!: TableType;
  @ViewChild('inputField') inputField!: ElementRef;

  albums: PhotoAlbum[] = [];
  filteredAlbums: PhotoAlbum[] = [];
  searchTerm: string = '';
  sortingOptions = ['albumId', 'id', 'title'];
  selectedSortingOption: string = '';
  headers = ['title', 'thumbnailUrl'];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((photos) => {
      this.albums = photos;
      // this.filteredAlbums = [...this.albums];
    });
  }

  clear(table: TableType) {
    table.clear();
    this.inputField.nativeElement.value = '';
  }

  filterData(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filterGlobal(filterValue, 'contains');
  }

  // groupPhotosByAlbum(photos: any[]): any[] {
  //   const groupedAlbums: { [key: string]: any[] } = {};

  //   photos.forEach((photo) => {
  //     if (!groupedAlbums[photo.albumId]) {
  //       groupedAlbums[photo.albumId] = [];
  //     }
  //     groupedAlbums[photo.albumId].push(photo);
  //   });

  //   return Object.values(groupedAlbums);
  // }

  onAlbumClick(albumPhotos: any[]): void {
    // Implement the animation logic here
  }

  // onSearchChange(): void {
  //   this.filteredAlbums = this.albums.filter((album) =>
  //     album.some((photo: PhotoAlbum) =>
  //       photo.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
  //     ),
  //   );
  // }

  // onSortingChange(): void {
  //   if (!this.selectedSortingOption) return;

  //   const sortField = this.selectedSortingOption;
  //   this.filteredAlbums.sort((a, b) => {
  //     const valueA = a[0][sortField];
  //     const valueB = b[0][sortField];
  //     if (valueA < valueB) {
  //       return -1;
  //     } else if (valueA > valueB) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });

  //   // Reverse the order if descending is selected
  //   if (this.selectedSortingOption.endsWith('_desc')) {
  //     this.filteredAlbums.reverse();
  //   }
  // }
}

//   @Input() albumPhotos: PhotoAlbum[] = [];
//   constructor() {}
// }

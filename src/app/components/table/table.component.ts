import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ArquivoService } from '../../services/arquivo.service';
import { PhotoService } from '../../services/photo.service';
import { SortEvent } from 'primeng/api';
import { Table as TableType } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class Table implements OnInit {
  @ViewChild('data') data!: TableType;
  @ViewChild('inputField') inputField!: ElementRef;

  loading = false;
  photos: any[] = [];
  headers: string[] = ['', 'sobrenome', 'cidade', 'pais', 'telefone', 'email'];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    setTimeout(() => {
      this.photoService.getPhotos().subscribe((photos) => {
        console.log(photos);
        this.photos = photos;
      });
      this.loading = false;
    }, 1000);
  }
  onSort(event: Event): void {}
  clear(table: TableType) {
    table.clear();
    this.inputField.nativeElement.value = '';
  }

  filterData(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filterGlobal(filterValue, 'contains');
  }

  formatHeader(header: string): string {
    return header
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  }
}

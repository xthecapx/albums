import { Component, OnInit } from '@angular/core';
import { DataSource } from '../services/data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  template: `
    <button *ngFor="let photo of photos" (click)="navigate(photo.albumId)">Album number {{ photo.albumId }}</button>
  `
})
export class AlbumsComponent implements OnInit {
    get photos() {
        return this.dataSource.firstThree;
    };

    constructor(private dataSource: DataSource, private router: Router) {}

    ngOnInit() {
        this.dataSource.getAlbums();
    }

    public navigate(id) {
        this.router.navigate(['/photos/'+ id]);
    }
}

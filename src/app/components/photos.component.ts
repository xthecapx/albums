import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '../services/data-source.service';

@Component({
  selector: 'app-photos',
  template: `
    <div *ngFor="let photo of photos">{{ photo.id }}</div>
  `
})
export class PhotosComponent implements OnInit {
    public photos;

    constructor(private activatedRoute: ActivatedRoute, private dataSource: DataSource) {}

    ngOnInit() {
      const id = this.activatedRoute.snapshot.params.id;
      this.photos = this.dataSource.getPhotos(id);
    }
}

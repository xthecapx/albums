import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '../services/data-source.service';

@Component({
  selector: 'app-photos',
  template: `
    <div *ngFor="let photo of photos; let i = index;">
      <ul *ngIf="i < 3">
        <li>{{photo.id}}</li>
        <li>{{photo.title}}</li>
        <li><img [src]="photo.url"/></li>
       </ul>
    </div>
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

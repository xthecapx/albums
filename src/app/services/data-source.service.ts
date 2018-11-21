import { Injectable } from "@angular/core";
import { Api } from "./api.service";

@Injectable()
export class DataSource {
    public albums = [];
    public firstThree = [];
    public photos = [];

    constructor(private api: Api) {}

    private descendingOrderBy = (prop) => {
        return function(a, b) {
            return b[prop] - a[prop];
        }
      }

    getAlbums() {
        this.api.get('/photos').subscribe((photos) => {
            this.albums = photos.sort(this.descendingOrderBy('albumId'));
            const maxIdToDisplay = this.albums[0].albumId - 3;

            this.firstThree = this.albums.reduce((acc, current, index) => {
                if (current.albumId > maxIdToDisplay) {
                   if (this.albums[index + 1].albumId !== current.albumId) {
                        acc.push(current);
                   } 
                }

                return acc;
            }, []);
        });
    }

    getPhotos(id) {
        return this.albums.filter((albums) => albums.albumId === Number(id));
    }
}
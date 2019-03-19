import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class VideosService {
    constructor(
        private jsonp: Jsonp) { }

    getVideos(pageId: number) {
        let apiUrl = `${environment.omdbApi}/?s=one&apikey=${environment.omdbKey}&page=${pageId}`;
        // return this.http.get(`${environment.omdbApi}/?s=one&apikey=${environment.omdbKey}&page=${pageId}`);
        return this.jsonp.request(apiUrl);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class VideosService {
    constructor(private http: HttpClient) { }

    getVideos(pageId: number) {
        return this.http.get(`${environment.omdbApi}/?s=one&apikey=${environment.omdbKey}&page=${pageId}`);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class VideosService {
    constructor(private http: HttpClient) { }

    getVideos(pageId: number) {
        console.log('getVideos');
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://www.omdbapi.com/'
            })
        };
        return this.http.get(`${environment.omdbApi}/?s=one&apikey=${environment.omdbKey}&page=${pageId}`, options);
    }

    getVideo(imdbId: number) {
        console.log('getVideos');
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://www.omdbapi.com/'
            })
        };
        return this.http.get(`${environment.omdbApi}/?apikey=${environment.omdbKey}&i=${imdbId}`, options);
    }
}
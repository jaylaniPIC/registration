import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Review } from '@app/_models/review';

@Injectable({ providedIn: 'root' })
export class ReviewService {
    constructor(private http: HttpClient) { }

    getAllReviews(userId: number) {
        return this.http.get(`${environment.apiUrl}/reviews/` + userId);
    }

    review(review: any) {
        return this.http.post(`${environment.apiUrl}/reviews/review`, review);
    }
}
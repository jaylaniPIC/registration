import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService } from '@app/_services/videos.service';
import { first } from 'rxjs/operators';
import { ReviewService } from '@app/_services/review.service';
import { AuthenticationService } from '@app/_services';
import { Subscription } from 'rxjs';

@Component({ templateUrl: 'rating.component.html' })

export class RatingComponent implements OnInit {
    detail: any;
    videos: any = [];
    imdbId: any;
    rating: number;
    currentUserSubscription: Subscription;
    currentUser: any;
    showError: boolean = false;
    
    constructor(
        private authenticationService: AuthenticationService,
        private videoService: VideosService,
        private router: Router,
        private route: ActivatedRoute,
        private ratingService: ReviewService
    ) {
        this.route.params.subscribe(params => {
            this.imdbId = params.imdbId;
        });
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.getAllVideos();
    }

    getAllVideos() {
        this.videoService.getVideo(this.imdbId).pipe(first()).subscribe(data => {
            this.detail = data;
        });
    }
    testRating(thisData) {
        this.rating = thisData;
    }
    saveRating() {
        this.rating = document.getElementById('formControlRange').value;
        const review = {
            'userId': this.currentUser.id,
            'imdbId': this.imdbId,
            'rating': this.rating,
            'poster': this.detail.Poster,
            'title': this.detail.Title,
            'year': this.detail.Year,
            'type': this.detail.Type,
            'category': ''
        };
        // store the data into local storage
        this.ratingService.review(review).subscribe(data => {
            this.router.navigateByUrl('dashboard');
        }, err => {
            this.showError = true;
        });
    }
    goBackToDetails() {
        this.router.navigateByUrl('videoDetails/' + this.imdbId);
    }
}
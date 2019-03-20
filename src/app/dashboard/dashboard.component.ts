import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { ReviewService } from '@app/_services/review.service';
import { Review } from '@app/_models/review';

@Component({ templateUrl: 'dashboard.component.html' })
export class DashboardComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    reviews: Review[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private reviewService: ReviewService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.getAllUserReviews();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    private getAllUserReviews() {
        this.reviewService.getAllReviews(this.currentUser.id).pipe(first()).subscribe(reviews => {
            this.reviews = reviews;
        });
    }
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '@app/_services';
import { VideosService } from '@app/_services/videos.service';
import './video-details.component.scss';

@Component({ templateUrl: 'video-details.component.html' })
export class VideoDetailsComponent implements OnInit {
    detail: any;
    videos: any = [];
    imdbId: any;
    constructor(
        private videoService: VideosService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            this.imdbId = params.imdbId;
            console.log(params);
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

    navigateToRating(imdbId: any) {
        this.router.navigateByUrl('rating/' + imdbId);
    }
}
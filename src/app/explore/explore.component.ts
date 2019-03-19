import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '@app/_services';
import { VideosService } from '@app/_services/videos.service';

@Component({ templateUrl: 'explore.component.html' })
export class ExploreComponent implements OnInit {
    videos: any = [];
    constructor(
        private videoService: VideosService
    ) {
    }

    ngOnInit() {
        this.getAllVideos();
    }

    getAllVideos() {
        this.videoService.getVideos(1).pipe(first()).subscribe(videos => {
            this.videos = videos;
        });
    }
}
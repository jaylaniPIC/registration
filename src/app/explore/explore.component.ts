import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoModel } from '@app/_models/video-model';
import { PagerService } from '@app/_services/pager.service';
import { VideosService } from '@app/_services/videos.service';
import { first } from 'rxjs/operators';
import './explore.component.css';

@Component({ templateUrl: 'explore.component.html' })

export class ExploreComponent implements OnInit {
    videos: any;
    videoList: any = [];
    pages: number;
    // pager object
    pager: any = {};

    constructor(
        private videoService: VideosService,
        private router: Router,
        private pagerService: PagerService
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.getInitialVideo();
        }, 1000);
    }

    getInitialVideo() {
        this.videoService.getVideos(1).pipe(first()).subscribe(data => {
            this.videos = data;

            this.videoList = this.videos.Search;
            this.pages = this.videos.totalResults / 10;
            // initialize to page 1
            this.setPage(1);
        });
    }

    getAllVideos(page: number) {
        this.videoService.getVideos(page).pipe(first()).subscribe(data => {
            this.videos = data;

            this.videoList = this.videos.Search;
            this.pages = this.videos.totalResults / 10;
            // initialize to page 1
        });
    }

    navigateToDetailsPage(imdbID: any) {
        this.router.navigateByUrl('videoDetails/' + imdbID);
    }
    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.videos.totalResults, page);
        this.getAllVideos(this.pager.currentPage);
    }
}
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { DashboardComponent } from './dashboard';
import { ExploreComponent } from './explore/explore.component';
import { RatingComponent } from './rating/rating.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'rating/:imdbId', component: RatingComponent },
    { path: 'videoDetails/:imdbId', component: VideoDetailsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
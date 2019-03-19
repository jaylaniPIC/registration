import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { DashboardComponent } from './dashboard';
import { ExploreComponent } from './explore/explore.component';
import { RatingComponent } from './rating/rating.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'rating', component: RatingComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
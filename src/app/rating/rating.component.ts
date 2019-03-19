import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'rating.component.html' })
export class RatingComponent implements OnInit {

    ngOnInit() {

    }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { catchError, of } from 'rxjs';
import { TutorLogged } from 'src/app/interfaces/tutor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    pass: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.login(this.formGroup.value).pipe(
      catchError(err => {
        if (err.status === 401) {
          console.log('erros', err.status)
          return of(undefined);
        }
        throw err;
      }),
    ).subscribe(
      (tutorLogged?: TutorLogged) => {
        if(tutorLogged) {
          window.localStorage.setItem('jwt', tutorLogged.jwt);
        setTimeout(() => {
          this.router.navigate([ '/' ]);
        }, 1000);
        }
      }
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutor, TutorLogged } from 'src/app/interfaces/tutor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string, 
    private http: HttpClient
  ) { }

  public login(user: Pick<Tutor, 'email' | 'gender'>): Observable<TutorLogged> {
    return this.http.post<TutorLogged>(
      `${this.apiBaseUrl}/login`, user
    )
  }
}

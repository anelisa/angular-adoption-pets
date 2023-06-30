import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPet } from 'src/app/interfaces/pet';
import { PetResponse } from 'src/app/interfaces/pet-response';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private http: HttpClient
  ) { }

  public getPets(): Observable<PetResponse> {
    return this.http.get<PetResponse>(`${this.apiBaseUrl}/pets`)
  }

  public createPet(pet: IPet): Observable<IPet>{
    return this.http.post<IPet>(`${this.apiBaseUrl}/pets`, pet)
  }
}

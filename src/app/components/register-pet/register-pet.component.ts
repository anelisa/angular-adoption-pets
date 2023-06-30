import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { IPet } from 'src/app/interfaces/pet';
import { PetService } from 'src/app/service/list-pet/pet.service';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.scss']
})
export class RegisterPetComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    breed: new FormControl(''),
    species: new FormControl(''),
    weight: new FormControl(''),
    colorFur: new FormControl(''),
    gender: new FormControl(''),
  })

  public subUnsubscribe: Subject<void> = new Subject();

  constructor(
    public petService: PetService
  ){}

  ngOnInit(): void {
    
  }

  public submit(): void {
    const pet: IPet = this.formGroup.value;
    this.petService.createPet(pet).pipe(
      takeUntil(this.subUnsubscribe),
    ).subscribe()
  }
}

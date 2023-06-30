import { Component, OnInit } from '@angular/core';
import { PetResponse } from 'src/app/interfaces/pet-response';
import { PetService } from 'src/app/service/list-pet/pet.service';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.scss']
})
export class ListPetComponent implements OnInit {

  public petDetails?: PetResponse[] = [];
  constructor(
    public petService: PetService
  ) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe(
      (resp: any) => {
        console.log('resp', typeof resp)
        this.petDetails = resp;

        console.log('details', this.petDetails)
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: '/home'
      },
      {
        label: 'Lista de pets',
        icon: 'pi pi-fw pi-file',
        routerLink: '/lista-pets'
      },
      {
        label: 'Registar pet',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/registrar-pet',
      },
    ]
  }
}

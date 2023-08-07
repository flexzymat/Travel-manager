import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientDetails=[
    {name: 'Adegoke Oluwadailare', email: 'adegoketemitope1909@gmail.com', phone: '0816073066', address: 'N0 2 Olonade Close, Monato, Ibadan Oyo State, Nigeria'},
    {name: 'Adegoke Oluwadailare', email: 'adegoketemitope1909@gmail.com', phone: '0816073066', address: 'N0 2 Olonade Close, Monato, Ibadan Oyo State, Nigeria'},
    {name: 'Adegoke Oluwadailare', email: 'adegoketemitope1909@gmail.com', phone: '0816073066', address: 'N0 2 Olonade Close, Monato, Ibadan Oyo State, Nigeria'},
    {name: 'Adegoke Oluwadailare', email: 'adegoketemitope1909@gmail.com', phone: '0816073066', address: 'N0 2 Olonade Close, Monato, Ibadan Oyo State, Nigeria'},
    {name: 'Adegoke Oluwadailare', email: 'adegoketemitope1909@gmail.com', phone: '0816073066', address: 'N0 2 Olonade Close, Monato, Ibadan Oyo State, Nigeria'},
    {name: 'Adegoke Oluwadailare', email: 'adegoketemitope1909@gmail.com', phone: '0816073066', address: 'N0 2 Olonade Close, Monato, Ibadan Oyo State, Nigeria'},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  view() {
    this.router.navigate(['clientprofile'])
  }

}

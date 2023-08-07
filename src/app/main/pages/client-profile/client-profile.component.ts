import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  clientProfile=[
    {name:'Odusote Mayokun', applicant: 'Odutose Mayokun Kemi', status: 'Married', occupation: 'Engineer', birthPlace: 'Nigeria', interest: 'Iceland', address: 'No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria', birthDate: '04/11/2012', email: 'adegoketemitope1909@abc.com', gender: 'Female', citizen: 'Nigeria, Uganda', education: "Bachelor's Degree", phone: '+234(0)81660730668', mail: 'No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria', purpose: 'Trading'  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

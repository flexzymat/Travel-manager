import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginInForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginInForm= this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    this.router.navigate(['/workspace'])
  }
}

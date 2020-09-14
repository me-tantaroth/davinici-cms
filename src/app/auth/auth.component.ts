import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  page: 'sign-in' | 'forgot-password' = 'sign-in';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoggin: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  constructor() { }

  onSwitchMode() {
    this.isLoggin = !this.isLoggin;
  }
  onSubmit(authForm: NgForm) {
    console.log(authForm.value)
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    
  }

}

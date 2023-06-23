import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loading:boolean=false;

  constructor(
    private fb:FormBuilder,
    private _snackBar:MatSnackBar,
    private router:Router
  ){
    this.form=this.fb.group({
      login:['',Validators.required],
      password:['',Validators.required]
    })
  }
  ngOnInit(): void {}
  ingresar(){
    const login=this.form.value.login;
    const password=this.form.value.password;
    if(login=='asd' && password=='asd'){
      this.fakeLoading();
      this.router.navigate(['dashboard']);
    }else{
      this.error('Datos incorrectos');
      this.form.reset();
    }
  }
  error(msj:string){
    this._snackBar.open(msj,'Error',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
  fakeLoading(){
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
    }, 1500);
  }
}
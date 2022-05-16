import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserNameValidators } from './username.validator';

@Component({
  selector: 'signupForm',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent  {

  // form = new FormGroup({
  //   username : new FormControl(),
  //   password : new FormControl(),
  // })



  // form = new FormGroup({
  //   username : new FormControl('',Validators.required),
  //   password : new FormControl('',Validators.required),
  // })


  
  // form = new FormGroup({
  //   username : new FormControl('',Validators.required),
  //   password : new FormControl('',Validators.required),
  // })
  // get username(){
  //   return this.form.get('username');
  // }


  /* --------------------------- VALIDATEUR MULTIPLE -------------------------- */
  // form = new FormGroup({
  //   username : new FormControl('',[
  //     Validators.required,
  //     Validators.minLength(3)
  //   ]),
  //   password : new FormControl('',Validators.required),
  // })
  // get username(){
  //   return this.form.get('username');
  // }


  /* ---------------------------- VALIDATION CUSTOM --------------------------- */

  //   form = new FormGroup({
  //   username : new FormControl('',[
  //     Validators.required,
  //     Validators.minLength(3),
  //     UserNameValidators.cannotContainsSpace
  //   ]),
  //   password : new FormControl('',Validators.required),
  // })
  // get username(){
  //   return this.form.get('username');
  // }

  /* -------------------------------------------------------------------------- */
  /*                                 CHAPITRE 2                                 */
  /* -------------------------------------------------------------------------- */


  form = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UserNameValidators.cannotContainsSpace
    ], UserNameValidators.shouldBeUnique),
    password : new FormControl('',Validators.required),
  })
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }

  login(){
    if(this.username?.value == "zaib" && this.password?.value == "mdr"){
      alert("GG bien jouer ");
    }else{
      this.form.setErrors({
        invalidLogin:true
      })
    }
  }


}

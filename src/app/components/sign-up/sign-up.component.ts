import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;
  currentTab = 0;
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.personalDetails = this.formBuilder.group({
      userEmail: ['', Validators.required],
      userPwd: ['', Validators.required]
    });
    // this.addressDetails = this.formBuilder.group({
    //     city: ['', Validators.required],
    //     address: ['', Validators.required],
    //     pincode: ['',Validators.required]
    // });
    // this.educationalDetails = this.formBuilder.group({
    //     highest_qualification: ['', Validators.required],
    //     university: ['', Validators.required],
    //     total_marks: ['',Validators.required]
    // });

  }
  get personal() { return this.personalDetails.controls; }
  // get education() { return this.educationalDetails.controls; }
  // get address() { return this.addressDetails.controls; }
  createAccount(){
    if (this.personalDetails.valid){
      //console.log(this.personalDetails.value);
      var frmValue=this.personalDetails.value;
      this.authService.SignUp(frmValue.userEmail, frmValue.userPwd);
    }
    else{
      alert('Form Not Valid');
    }
  }
  // next(){
  //   if(this.step==1){
  //         this.personal_step = true;
  //         if (this.personalDetails.invalid) { return  }
  //         this.step++
  //   }
  //   if(this.step==2){
  //       this.address_step = true;
  //       if (this.addressDetails.invalid) { return }
  //           this.step++;
  //   }
  // }
  // previous(){
  //   this.step--
  //   if(this.step==1){
  //     this.personal_step = false;
  //   }
  //   if(this.step==2){
  //     this.education_step = false;
  //   }
  // }
  // submit(){
  //   if(this.step==3){
  //     this.education_step = true;
  //     if (this.educationalDetails.invalid) { return }
  //   }
  // }



}

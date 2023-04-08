import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  contactForm!: FormGroup;
  phone_pattern=/^[0-9]\d{6,19}$/;
  loading:boolean=false;
  hasFormErrors:boolean = false;
  constructor(public matDialogRef: MatDialogRef<AddModalComponent>) { 
    this.initForm();
  }

  ngOnInit(): void {
  }


  initForm() {
    this.contactForm = new FormGroup({

      first_name: new FormControl(null, [
        Validators.required,
      ]),

      last_name :new FormControl(null,[
        Validators.required,
      ]),

      email :new FormControl(null,[
        Validators.required,
        Validators.email
      ]),

      compony :new FormControl(null,[
        Validators.required,
      ]),

      date :new FormControl(null,[
        Validators.required,
      ]),

      probability_status :new FormControl(null,[
        Validators.required,
      ]),

      state :new FormControl(null,[
        Validators.required,
      ]),


      phone :new FormControl(null,
        Validators.compose([Validators.required,Validators.pattern(this.phone_pattern)])
      ),




    });
  }

  AddNewContact() {
    this.loading=true;
    console.log(this.contactForm.value,);
    if(this.contactForm.invalid){
      this.hasFormErrors = true;
      this.loading = false;
       return;
    }

    this.loading = false;
    this.matDialogRef.close(this.contactForm.value);
    
  }

}

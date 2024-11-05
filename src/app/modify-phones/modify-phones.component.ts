import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgIf } from "@angular/common";
import { Phones } from '../phones';
import { PhoneService } from '../services/phone.service';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-modify-phone',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-phones.component.html',
  styleUrls: ['./modify-phones.component.css']
})
export class ModifyPhoneComponent implements OnInit {
  phoneForm: FormGroup;
  phone: Phones | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private router: Router
  ) {
    this.phoneForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      company: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      storage: [''],
      smartPhone: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.phoneService.getPhoneById(+id).subscribe(phone => {
        if (phone) {
          this.phone = phone;
          this.phoneForm.patchValue(phone);
        }
      });
    }
  }


  onSubmit(): void {
    const phone: Phones = this.phoneForm.value;

    if (phone.id) {
       this.phoneService.updatePhone(phone);
    } else {
      // Add new phone
      const newId = this.phoneService.generateNewId();
      phone.id = newId;
      this.phoneService.addPhone(phone);
    }
    this.router.navigate(['/phones']);
  }





  navigateToPhoneList(): void {
    this.router.navigate(['/phones']);
  }

  protected readonly error = error;
}

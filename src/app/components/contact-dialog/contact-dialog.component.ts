import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-contact-dialog',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-dialog.component.html',
  styleUrl: './contact-dialog.component.scss'
})
export class ContactDialogComponent {


  @Output() close = new EventEmitter<void>();
  private ScrollService = inject(ScrollService);
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/) // 🔥 Indian valid number
      ]],
      message: ['']
    });
  }

  // ✅ GETTERS
  get f() {
    return this.form.controls;
  }

 submit() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const formData = new FormData();

  formData.append('access_key', '08539ae8-ac96-4019-9540-e20af3b12f2a'); 
  formData.append('name', this.form.value.fullName);
  formData.append('phone', this.form.value.phone);
  formData.append('message', this.form.value.message);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {

    if (data.success) {

      // ✅ close dialog
      this.close.emit();

      // ✅ toast trigger (service wala)
      setTimeout(() => {
        this.ScrollService.trigger('Form submitted! I will contact you 🚀');
      }, 200);

      this.form.reset();

    } else {
      console.error('Error:', data);
    }

  })
  .catch(err => {
    console.error('Fetch error:', err);
  });
}

  closeDialog() {
    this.close.emit();
  }
}

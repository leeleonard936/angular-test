import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatCardModule } from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { Form } from 'react-bootstrap';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MatCardModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(public dialog: Dialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open<string>(TestDialogModal, {
      width: '500px',
      data: {firstName: this.fnValue, lastName: this.lnValue, email: this.eValue},
    });
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  fnameFormControl = new FormControl('');
  lnameFormControl = new FormControl('');
  fnValue='';
  lnValue='';
  eValue='';
}
@Component({
  selector: 'DialogModal',
  templateUrl: './app.dialogModal.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
})
export class TestDialogModal {
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: FormData,
  ) {}
}

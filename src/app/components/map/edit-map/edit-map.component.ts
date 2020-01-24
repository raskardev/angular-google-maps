import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.css']
})
export class EditMapComponent implements OnInit {
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string }
  ) {
    this.form = formBuilder.group({
      title: new FormControl(data.title),
      description: new FormControl(data.description)
    });
  }

  ngOnInit() {}

  saveChanges() {
    this.dialogRef.close(this.form.value);
  }

  cancelChanges() {
    this.dialogRef.close();
  }
}

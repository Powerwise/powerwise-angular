import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import * as uuid from 'node-uuid';
@Component({
  moduleId: module.id,
  selector: 'add-device',
  templateUrl: 'add-device.component.html',
  styleUrls: ['add-device.component.css'],
})
export class AddDeviceComponent implements OnInit {
  voucher: any;
  form: FormGroup;
  constructor(
      public dialog: MdDialogRef<AddDeviceComponent>, public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: [uuid.v4()],
      type: ['GOOD_TYPE', Validators.required],
      killowats: [100, Validators.required],
      name: ['FRIDGE', Validators.required]
    });
  }
  onAdd(payload: any) {
    this.dialog.close({type: 'CREATE', payload});
  }
  onCancel() {
    this.dialog.close({action: 'CANCEL'});
  }
}

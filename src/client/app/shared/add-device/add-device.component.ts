import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdDialogRef} from '@angular/material';

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
      id: [this.guid()],
      type: ['', Validators.required],
      killowats: [100, Validators.required],
      name: ['', Validators.required]
    });
  }
  onAdd(payload: any) {
    this.dialog.close({type: 'CREATE', payload});
  }
  onCancel() {
    this.dialog.close({action: 'CANCEL'});
  }
  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() +
        s4() + s4();
  }
}

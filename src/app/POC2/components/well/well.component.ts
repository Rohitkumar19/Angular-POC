import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {
  wellForm: FormGroup;
  isSubmitted: boolean = false;
  @Output() newWellEvent = new EventEmitter();
  @Input('patchSelectedWell') set _patchForm(value: any) {
    if(this.wellForm && value){
      this.fillFormDetails(value)
    }
  }
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createWellForm();
  }

  fillFormDetails(value){
    this.wellForm.get('name').patchValue(value.name)
    this.wellForm.get('type').patchValue(value.type)
    this.wellForm.get('source').patchValue(value.source)
    this.wellForm.get('source').disable()
  }

  createWellForm() {
    this.wellForm = this.fb.group({
      name: ['', Validators.required],
      type:['', [Validators.required, this.allowedType.bind(this)]],
      source:['', Validators.required]
    })
  }

  onAddWell() {
    this.isSubmitted = true;
    if(this.wellForm.valid){
      this.newWellEvent.emit(this.wellForm.value)
    }
  }

   allowedType(control: AbstractControl):{[key:string]:any} | null {
    let value = control.value.toLowerCase().trim();
    const allowedType = ['esp', 'na'];
    if(allowedType.includes(value)){
      return null
    } else {
      return {
        'notAllowedType': true
      }
    }
  }

}

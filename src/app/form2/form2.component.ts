import { MyNameValidator, MyNameValidatorParm } from './validator/myname.validator';
import { CompileTypeSummary } from '@angular/compiler';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  @ViewChild('one') d1:ElementRef;
  form: any;
  types= [1,2,3,4,5];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
this.d1.nativeElement.insertAdjacentHTML('beforeend', '<app-cards></app-cards>');
    this.form = this.fb.group(
      {
        title: ['p1 default value', [Validators.required,MyNameValidator,MyNameValidatorParm('123')]],
        subtitle: ['p2 default value', [Validators.required]],
        types: this.fb.array(
          this.types.map((v, idx) => {
            return this.fb.control(v, [Validators.required]);
          })
        )
      }
    );
  }
  doSubmit(f) {
    console.log(this.d1.nativeElement);

  }
}

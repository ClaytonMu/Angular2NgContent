import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: any = {};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      console.log(f.value);
    }

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  primary='<button type=button" class="btn btn-primary">Primary</button>';
  secondary='<button type="button" class="btn btn-secondary">Secondary</button>';
  success='<button type="button" class="btn btn-success">Success</button>';
  danger='<button type="button" class="btn btn-danger">Danger</button>';
  warning='<button type="button" class="btn btn-warning">Warning</button>';
  info='<button type="button" class="btn btn-info">Info</button>';
  constructor() { }

  ngOnInit(): void {
  }

}

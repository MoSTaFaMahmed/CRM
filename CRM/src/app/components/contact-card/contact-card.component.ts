import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/core/models/IContact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contactItem !:IContact;
  constructor() { }

  ngOnInit(): void {
  }

}

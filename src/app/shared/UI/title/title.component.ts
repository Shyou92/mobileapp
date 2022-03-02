import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  template: `Title: {{ title }}`,
})
export class TitleComponent {
  constructor() {}
  @Input() headerTitle: string | undefined;

  // @Output() titleChange = new EventEmitter<string>();

  // onTitleChange(model: string): void {
  //   this.title = model;
  //   this.titleChange.emit(model);
  // }
}

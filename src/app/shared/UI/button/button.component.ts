import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonName: string | undefined;
  @Input() buttonAction: void | undefined;

  tickMe(): void {
    console.log(`Hello from ${this.buttonName}`);
  }
}

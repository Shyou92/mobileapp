import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() headerTitle: string | undefined;
  @Input() image: string | undefined;
  @Input() cardText: string | undefined;
  @Input() buttonName: string | undefined;
}

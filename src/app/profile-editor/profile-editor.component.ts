import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class HeroFormReactiveComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      alterEgo: new FormControl(this.hero.alterEgo, {
        // asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
        updateOn: 'blur',
      }),
      power: new FormControl(this.hero.power, Validators.required),
    });
  }

  get name() {
    return this.heroForm.get('name')!;
  }

  get power() {
    return this.heroForm.get('power')!;
  }

  get alterEgo() {
    return this.heroForm.get('alterEgo')!;
  }
}

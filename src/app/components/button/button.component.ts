import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ alias: 'text' }) text!: string;
  @Input({ alias: 'color' }) color!: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}

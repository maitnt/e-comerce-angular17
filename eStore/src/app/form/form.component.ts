import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  count = 0;
  counter(type: string) {
    type === 'incr' ? this.count++ : this.count--;
  }

  isShift(event?: KeyboardEvent) {
    console.log('Shift key pressed');
    if (event?.shiftKey && event?.key === "Y") {
      console.log('Shift + Y detected');
      
    }
  }
}

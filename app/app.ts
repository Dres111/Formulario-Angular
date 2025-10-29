import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentExplicacion } from './components/component-explicacion/component-explicacion';
import { SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentExplicacion, SlicePipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
onSubmit() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('');

}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentExplicacion } from './components/component-explicacion/component-explicacion';
import { SlicePipe, CommonModule } from '@angular/common'; // 👈 Asegúrate de importar CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComponentExplicacion,
    SlicePipe,
    FormsModule,
    CommonModule // 👈 Esto habilita *ngFor, *ngIf, etc.
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hello, product');

  productos = [
    {
      nombre: 'Salchipapas',
      descripcion: 'Crujientes papas doradas acompañadas de deliciosas rodajas de salchicha...',
      categoria: 'Comida rápida',
      imagenUrl: 'https://imag.bonviveur.com/emplatado-final-de-las-salchipapas.jpg',
      fechaInicio: '',
      fechaFin: '',
      precio: 20000,
      unidades: 0,
      disponible: true
    },
    {
      nombre: 'Perro Caliente',
      descripcion: 'Un clásico irresistible: pan suave y salchicha jugosa...',
      categoria: 'Comida rápida',
      imagenUrl: 'https://rms-media-prod.generalmills.com/f5a517df-12c8-4d55-aa70-c882d99122e0.jpg',
      fechaInicio: '',
      fechaFin: '',
      precio: 20000,
      unidades: 0,
      disponible: true
    },
    {
      nombre: 'Hamburguesa',
      descripcion: 'Jugosa carne a la parrilla entre panes suaves...',
      categoria: 'Comida rápida',
      imagenUrl: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg',
      fechaInicio: '',
      fechaFin: '',
      precio: 15000,
      unidades: 0,
      disponible: true
    }
  ];

  formModel = {
    nombre: '',
    descripcion: '',
    categoria: '',
    imagenUrl: '',
    fechaInicio: '',
    fechaFin: '',
    precio: 0,
    unidades: 0,
    disponible: false
  };

  onSubmit() {
    this.productos.push({ ...this.formModel });
    this.formModel = {
      nombre: '',
      descripcion: '',
      categoria: '',
      imagenUrl: '',
      fechaInicio: '',
      fechaFin: '',
      precio: 0,
      unidades: 0,
      disponible: false
    };
  }
}
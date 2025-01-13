import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-game',
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  rows = 0;
  columns = 0;
  cells: { id: number; color: string }[] = [];
  constructor(private router: Router) {}

  generateGrid() {
    this.cells = [];
    for (let i = 0; i < this.rows * this.columns; i++) {
      this.cells.push({ id: i, color: 'white' });
    }
  }
  changeColor(cell: { id: number; color: string }) {
    const color = prompt('Enter a color:');
    if (color) {
      cell.color = color;
    }
  }

  logout() {
    if (confirm('You want to log out?')) {
      this.router.navigate(['/']);
    }
}
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DxDataGridModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  data = new Array(100).fill(0).map((_, index) => ({
    id: index,
    name: `Item ${index}`,
    description: `Description ${index}`,
  }));
  
  protected readonly title = signal('devex');
}

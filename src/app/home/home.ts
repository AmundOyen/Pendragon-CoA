import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}

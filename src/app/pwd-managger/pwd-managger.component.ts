import { Component } from '@angular/core';
import {MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-pwd-managger',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './pwd-managger.component.html',
  styleUrl: './pwd-managger.component.css'
})
export class PwdManaggerComponent {

}

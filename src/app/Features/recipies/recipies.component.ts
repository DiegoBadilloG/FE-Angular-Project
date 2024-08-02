import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipies',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule,
    CommonModule
  ],
  templateUrl: './recipies.component.html',
  styleUrl: './recipies.component.css'
})
export class RecipiesComponent {
  private rowData: any;
  private recipeURL: string = "/api/recipes.json";
  private recipesList!: any[];
  private selectedItem: any;
  private itemIndex: number = 0;

  /* textos de la seccion */
  ingedientsLabel: string = "Ingredientes";
  recipeName: string = "";
  stepsLabe: string = "Elaboración";
  ingridients: string = "";
  descr: string = "";
  steps: string = "";
  recipeImg: any;

  isLiked: boolean = false;

  constructor(private httService: HttpClient) {
    this.rowData = this.httService.get(this.recipeURL)
      .subscribe((data: any) => {
        this.recipesList = data.recipes;
        this.loadItem(this.recipesList);
      });
  } 

  loadItem(data: any) {
    if (data) {
      this.selectedItem = data[this.itemIndex];

      this.recipeName = this.selectedItem.name;
      this.recipeImg = this.selectedItem.img;
      this.descr = this.selectedItem.description;
      this.ingridients = this.selectedItem.ingridientes;
      this.steps = this.selectedItem.pasos;
      this.isLiked = this.selectedItem.liked;
    }
  } 

  prevItem() {
    if (this.itemIndex > 0) {
      this.itemIndex -= 1;
      this.loadItem(this.recipesList);
    }
  }

  nextItem() {
    if (this.itemIndex < this.recipesList.length-1) {
      this.itemIndex += 1;
      this.loadItem(this.recipesList);
    }
  }

  itemLiked() {
    this.isLiked = !this.isLiked;
  }

  formatText(ele: string) {
    return ele.replace(/\n/g, '\<br>');
  }

}

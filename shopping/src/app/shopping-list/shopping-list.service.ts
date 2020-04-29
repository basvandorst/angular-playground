import {EventEmitter, Injectable, Output} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {Recipe} from "../recipes/recipe.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    // ingredients.forEach((ingredient:Ingredient) => {
    //   this.addIngredient(ingredient)
    // })
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.getIngredients());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}

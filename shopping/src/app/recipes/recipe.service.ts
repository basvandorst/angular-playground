import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe222',
      'This is simply a test ',
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAEqb16.img?h=533&w=799&m=6&q=60&o=f&l=f',
      [
        new Ingredient('meat', 123),
        new Ingredient('apples', 423)
      ]),
    new Recipe(
      'Test recipe444',
      'This is simply a test ',
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAEqb16.img?h=533&w=799&m=6&q=60&o=f&l=f',
      [
        new Ingredient('meat', 123),
        new Ingredient('tomatoes', 423)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

}

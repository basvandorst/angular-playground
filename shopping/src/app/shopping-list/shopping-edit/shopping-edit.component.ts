import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement): void {
    let ingredient = new Ingredient(nameInput.value, Number(amountInput.value));
    this.shoppingListService.addIngredient(ingredient);
  }

}

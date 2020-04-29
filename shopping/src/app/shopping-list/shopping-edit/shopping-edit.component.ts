import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingridientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement): void {
    let ingredient = new Ingredient(nameInput.value, Number(amountInput.value));
    this.ingridientAdded.emit(ingredient);
  }

}

import { Component, ElementRef, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName') ingredientNameRef:ElementRef;
  @ViewChild('ingredientAmount') ingredientAmountRef:ElementRef;
  @Output() ingredientAdded =  new EventEmitter<Ingredient>()


  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(){
      var ingredient = new Ingredient(this.ingredientNameRef.nativeElement.value,this.ingredientAmountRef.nativeElement.value);
      this.ingredientAdded.emit(ingredient);
  }
}

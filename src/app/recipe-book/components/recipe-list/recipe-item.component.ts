import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipe;
  receipeId;

  constructor() { }

  ngOnInit() {
  }

}

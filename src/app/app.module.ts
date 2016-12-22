import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './recipe-book/components/header/header.component';
import { RecipesComponent } from './recipe-book/components/recipes/recipes.component';
import { RecipeListComponent } from './recipe-book/components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/components/recipe-list/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

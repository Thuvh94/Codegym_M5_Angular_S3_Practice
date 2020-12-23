import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {FontsizeEditorComponent} from './font-size-editor/fontsizeEditor.component';
import {FormsModule} from '@angular/forms';
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FontsizeEditorComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fontsize-editor',
  templateUrl: './fontSizeEditor.component.html'
})
export class FontsizeEditorComponent {
  fontSize = 14;
  // tslint:disable-next-line:typedef
  onChange(value) {
    this.fontSize = value;
  }
}

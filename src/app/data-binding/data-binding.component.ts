import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: ``
})
export class DataBindingComponent {
  titre : string = "Demo du data binding interpolation abcd";

  status : boolean =false;

  nom : string ="bayar nour el eslem";

  changerTitre()
  {
    this.titre = "new title !";
  }

}


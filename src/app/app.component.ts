import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isAuth: boolean = false;

  appareilOneName = 'Machine à laver';
  appareilTwoName = 'Frigo';
  appareilThreeName = 'Ordinateur';

  appareilOneStatus = 'éteint';
  appareilTwoStatus = 'allumé';
  appareilThreeStatus = 'éteint';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');

    this.appareilOneStatus = 'allumé';
    this.appareilTwoStatus = 'allumé';
    this.appareilThreeStatus = 'allumé';
  }

}


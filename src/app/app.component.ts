import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'hEYhEY';
  isAuth = false;

  constructor(){
     setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
}

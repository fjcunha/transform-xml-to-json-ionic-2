// import { TransformProvider } from './../../providers/transform/transform';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { map } from 'rxjs/operators/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(

    public navCtrl: NavController,
    public dataProvide: DataProvider,
    // public transformProvider: TransformProvider

  ) {

    this
      .dataProvide
      .getRandomUser()
      // .pipe(
      //   map((res: string) => this.transformProvider.convertToJson(res))
      // )
      .subscribe((res: Object) => {
        console.dir(res);
      });

  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uca-app';

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    console.log("feature App", feature);
    this.loadedFeature = feature;
  }

}

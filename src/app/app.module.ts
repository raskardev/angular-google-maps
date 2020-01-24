import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtbiDnyJ2I56agv0vPgSnI2t6yJXe4mXw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

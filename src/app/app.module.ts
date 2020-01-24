import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';
import { EditMapComponent } from './components/map/edit-map/edit-map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  entryComponents: [EditMapComponent],
  declarations: [AppComponent, MapComponent, EditMapComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_API_KEY_HERE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WeatherComponent } from "./weather/weather.component";
import { RouterModule } from "@angular/router";
import { allAppRoutes } from "./routes";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ApixuService } from "./apixu.service";
import { WeatherDetailsComponent } from './weather-details/weather-details.component';


@NgModule({
  declarations: [AppComponent, WeatherComponent, WeatherDetailsComponent, ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [ApixuService,],
  bootstrap: [AppComponent]
})
export class AppModule {}
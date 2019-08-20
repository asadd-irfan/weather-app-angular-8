import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
        'http://api.apixu.com/v1/forecast.json?key=c769ebd5251e4b778bf61845193007&q=' + location + '&days=7'
      );
  }
}

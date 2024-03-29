import { Component } from '@angular/core';
import { WeatherForecastsClient, WeatherForecast } from '../web-api-client';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];

  public filters = {
    weather: "",
    tempCLow: null,
    tempCHigh: null
  };

  constructor(private client: WeatherForecastsClient) {
    this.refresh();
  }

  public filterChanged() {
    this.refresh();
  }

  private refresh() {
    this.client.getWeatherForecasts(this.filters.weather, this.filters.tempCLow || null, this.filters.tempCHigh || null).subscribe({
      next: result => this.forecasts = result,
      error: error => console.error(error),
    });
  }
}

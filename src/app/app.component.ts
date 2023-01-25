import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Weather } from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cityName='New Delhi';
  weather:Weather=new Weather();
  constructor(private http:HttpClient){
  }

  ngOnInit() {
    let params = new HttpParams().set("city",this.cityName);
    let header = new HttpHeaders()
    .set('X-RapidAPI-Key', 'e8703d9480mshc90f5237d67e230p102437jsn9d6f87811b9b')
    .set('X-RapidAPI-Host', 'weather-by-api-ninjas.p.rapidapi.com');
  
    const options = { params: params, headers: header };
  
    this.http.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',options).subscribe((data:any)=>{
      console.log(data);
      this.weather=data;
    })
  }

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'e8703d9480mshc90f5237d67e230p102437jsn9d6f87811b9b',
  //     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  //   }
  // };
  
  onSubmit(){

  let params = new HttpParams().set("city",this.cityName);
  let header = new HttpHeaders()
  .set('X-RapidAPI-Key', 'e8703d9480mshc90f5237d67e230p102437jsn9d6f87811b9b')
  .set('X-RapidAPI-Host', 'weather-by-api-ninjas.p.rapidapi.com');

  const options = { params: params, headers: header };

  this.http.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',options).subscribe((data:any)=>{
    console.log(data);
    this.weather=data;
  })


}

}
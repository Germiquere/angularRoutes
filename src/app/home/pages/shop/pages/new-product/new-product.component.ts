import { Component, OnInit } from '@angular/core';
import { GeocoderResponse } from 'src/app/home/models/geocoder-response.model';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
   this.homeService.geocode({
    address:" esperanza santa fe hohenfels 1507 "
   }).then((res :GeocoderResponse)=>{
    if (res.status === 'OK' && res.results?.length) {
      console.log(res.results[0]);
    }
   })
  }

}

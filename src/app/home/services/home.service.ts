import { Injectable} from '@angular/core';
import { GeocoderResponse } from '../models/geocoder-response.model';


@Injectable({providedIn: 'root'})
export class HomeService {

    constructor() { }
   
    geocode(request: google.maps.GeocoderRequest): Promise<GeocoderResponse> {
        let geocoder = new google.maps.Geocoder();
        return new Promise((resolve, reject) => {
          geocoder.geocode(request, (results:any, status :any) => {
            if(results !== null){
                const response = new GeocoderResponse(status, results)
                resolve(response);
            }else {
                // En caso de error, rechazar la promesa con un mensaje de error
                reject(new Error('Geocodificación fallida. Status: ' + status));
            }
          });
        });
      }
}
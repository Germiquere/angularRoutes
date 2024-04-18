export class GeocoderResponse {
    status: google.maps.GeocoderStatus;
    error_message: string;
    results: google.maps.GeocoderResult[];
  
    constructor(status: google.maps.GeocoderStatus, results: google.maps.GeocoderResult[]) {
      this.status = status;
      this.results = results;
      this.error_message=""
    }
  }
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesBackendService {
  private readonly ApiKey="5c7097b09a678d4a31862359aabf467b";
  readonly URL = "https://api.themoviedb.org/3/movie";
  constructor(private _http: HttpClient) { }
  async getTopRated(){
    const options= {
        params: {
            api_key:this.ApiKey
          }
        }
   return await this._http.get(`${this.URL}/top_rated`,options).toPromise();
  }
}

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Config} from '../config/env.config';
// import 'rxjs/add/operator/do';  // for debugging

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  register(payload: any) {
    return this.http.post(`${Config.API}/register`, payload)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }
  save(payload: any) {
    return this.http.post(`${Config.API}/save-devices`, payload)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }
  createEvent(payload: any) {
    return this.http.post(`${Config.API}/create-event`, payload)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }
  /**
    * Handle HTTP error
    */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ?
        error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);  // log to console instead
    return Observable.throw(errMsg);
  }
}

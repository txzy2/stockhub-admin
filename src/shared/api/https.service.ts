import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {delay, of, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpsService {
  public host: string;

  constructor(private https: HttpClient) {
    this.host = environment.API_URL;
  }

  // TODO: Сделать разделение url

  postData(data: any, url: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    console.log(data, url);

    return of(null).pipe(
      delay(2000),
      switchMap(() =>
        this.https.post<any[]>(`${this.host}/${url}`, data, {headers})
      )
    );

  }
}

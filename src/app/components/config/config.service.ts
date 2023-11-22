import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  configService: any;
  config: { heroesUrl: any; textfile: any; date: any; };

  constructor(private http: HttpClient) {

    configUrl = "assets/config.json"

    getConfig() {
      return this.http.get<Config>(this.configUrl);
    }
  }

  options: {
    headers?: HttpHeaders | { [header: string]: string | string[]; };
    observe?: 'body' | 'events' | 'response';
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
  } | undefined

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        heroesUrl: data.heroesUrl,
        textfile: data.textfile,
        date: data.date
      });
  }
}

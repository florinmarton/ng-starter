import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';

export class Resource {
  id: number = 0;
}

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}

export class DefaultSerializer {
  fromJson = (data: any) => ({ ...data } as Resource);
  toJson = (data: Resource) => data;
}

export class DataService<T extends Resource> {
  constructor(
      private httpClient: HttpClient,
      private url: string,
      private endpoint: string,
      private serializer: Serializer = new DefaultSerializer()) {}

    public create(item: T): Observable<T> {
      return this.httpClient
        .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
        .pipe(map(data => this.serializer.fromJson(data) as T));
    }

    public update(item: T): Observable<T> {
      return this.httpClient
        .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
          this.serializer.toJson(item))
        .pipe(map(data => this.serializer.fromJson(data) as T));
    }

    read(id: number): Observable<T> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}/${id}`)
        .pipe(map((data: any) => this.serializer.fromJson(data) as T));
    }

    list(): Observable<T[]> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}`)
        .pipe(map((data: any) => this.convertData(data.items)));
    }

    delete(id: number) {
      return this.httpClient
        .delete(`${this.url}/${this.endpoint}/${id}`);
    }

    private convertData(data: any[]): T[] {
      return data.map(item => this.serializer.fromJson(item)) as T[];
    }
  }

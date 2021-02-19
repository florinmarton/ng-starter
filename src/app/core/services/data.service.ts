import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IResource, ISerializer, IApiResponse } from 'src/app/shared/interfaces';

export class DefaultSerializer {
  fromJson = (data: any) => ({ ...data } as IResource);
  toJson = (data: IResource) => data;
}

export class DataService<T extends IResource> {
  private url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private endpoint: string = '/',
    private serializer: ISerializer = new DefaultSerializer()
  ) {}

  get(endpoint: string) {
    return this.http.get(`${this.url}${endpoint}`);
  }

  post(endpoint: string, data: any) {
    return this.http.post(`${this.url}${endpoint}`, data);
  }

  put(endpoint: string, data: any) {
    return this.http.put(`${this.url}${endpoint}`, data);
  }

  delete(endpoint: string) {
    return this.http.delete(`${this.url}${endpoint}`);
  }

  getAll(): Observable<T[]> {
    return (this.get(this.endpoint) as Observable<T[]>).pipe(
      map((resources) => {
        return resources;
      }),
      catchError(this.handleError)
    );;
  }

  getById(id: number): Observable<T> {
    return (this.get(`${this.endpoint}/${id}`) as Observable<T>).pipe(
      map((resource) => {
        return resource;
      }),
      catchError(this.handleError)
    );
  }

  create(resource: T): Observable<T> {
    return (this.post(this.endpoint, resource) as Observable<T>)
      .pipe(catchError(this.handleError));
  }

  update(resource: T): Observable<boolean> {
    return (this.put(`${this.endpoint}/${resource.id}`, resource) as Observable<IApiResponse>)
      .pipe(
        map((res) => res.status),
        catchError(this.handleError)
      );
  }

  remove(id: number): Observable<boolean> {
    return (this.delete(`${this.endpoint}/${id}`) as Observable<IApiResponse>)
      .pipe(
        map((res) => res.status),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }
}

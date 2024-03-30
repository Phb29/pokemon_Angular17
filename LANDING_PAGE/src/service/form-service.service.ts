import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
private Url = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';
  constructor( private http:HttpClient) { }

sendForm(name:string,email:string):Observable<Form>{
const form={name,email};

return this.http.post<Form>(this.Url,form)
}
}

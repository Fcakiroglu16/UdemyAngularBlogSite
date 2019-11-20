import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "../models/contact";
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: "root"
})
export class HelperService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl: string = `${environment.baseUrl}/helper`;

  sendContactEmail(contact: Contact) {
    return this.httpClient.post(`${this.apiUrl}/SendContactEmail`, contact);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "../models/contact";

@Injectable({
  providedIn: "root"
})
export class HelperService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = "https://localhost:44356/api/helper";

  sendContactEmail(contact: Contact) {
    return this.httpClient.post(`${this.apiUrl}/SendContactEmail`, contact);
  }
}

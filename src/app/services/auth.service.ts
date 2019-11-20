import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  IsAuthenticated(email: string, password: string) {
    let adminUser = { email: email, password: password };

    return this.httpClient.post<any>(
      `${environment.baseUrl}/Auth/IsAuthenticated`,
      adminUser
    );
  }
}

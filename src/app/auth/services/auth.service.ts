import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { AuthStatus, LoginResponse, User } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private _currentUser: User | null = null;
  private _authStatus: AuthStatus = AuthStatus.checking;
  constructor(private http: HttpClient) {}
  get currentUser(): User | null {
    return this._currentUser;
  }
  get authStatus(): AuthStatus {
    return this._authStatus;
  }
  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}users/auth/login`;
    const body = { email, password };
    return this.http.post<LoginResponse>(url, body).pipe(
      tap(({ user }) => {
        // guardar el status y el user en sus respectivas propiedades y guardar el token en el local storage
        this._currentUser = user;
        this._authStatus = AuthStatus.authenticated;
        localStorage.setItem('token', user.token);
      }),
      map(() => true),
      //   AL usar el catcherror con el trhowError me perimite usar en el subscribe un objeto con el next y con el error
      catchError((error) => {
        return throwError(() => error.error.message);
      })
    );
  }
}

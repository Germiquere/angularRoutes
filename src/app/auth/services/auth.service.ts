import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import {
  AuthStatus,
  AutoLoginResponse,
  LoginResponse,
  User,
} from '../interfaces';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;

  private _currentUser: User | null = null;

  private _authStatus: AuthStatus = AuthStatus.checking;

  constructor(private http: HttpClient, private router: Router) {}

  get currentUser(): User | null {
    return this._currentUser;
  }
  setCurrentUser(user: User | null): User | null {
    return (this._currentUser = user);
  }
  get authStatus(): AuthStatus {
    return this._authStatus;
  }

  setAuthStatus(status: AuthStatus) {
    this._authStatus = status;
  }

  private setData(user: User, authStatus: AuthStatus) {
    this._currentUser = user;
    this._authStatus = authStatus;
    localStorage.setItem('token', user.token);
  }

  login$(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}users/auth/login`;
    const body = { email, password };
    return this.http.post<LoginResponse>(url, body).pipe(
      tap(({ user }) => {
        // guardar el status y el user en sus respectivas propiedades y guardar el token en el local storage
        this.setData(user, AuthStatus.authenticated);
      }),
      map(() => true),
      //   AL usar el catcherror con el trhowError me perimite usar en el subscribe un objeto con el next y con el error
      catchError((error) => {
        if (error.error.message === undefined) {
          return throwError(() => 'Se ha producido un error');
        }

        return throwError(() => error.error.message);
      })
    );
  }

  autoLogin() {
    const token = localStorage.getItem('token');
    // agregar el logout y el clear del store
    if (!token) return this.logout();
    setTimeout(() => {
      this.checkToken$(token).subscribe({
        next: ({ user }) => {
          this.setData(user, AuthStatus.authenticated);
          this.router.navigateByUrl('/home');
        },
        error: () => {
          this._authStatus = AuthStatus.notAuthenticated;
          this.logout();
        },
      });
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.setAuthStatus(AuthStatus.notAuthenticated);
    this.router.navigateByUrl('/auth/login');
  }

  checkToken$(token: string) {
    const url = `${this.baseUrl}users/renewToken`;
    const headers = new HttpHeaders().set('x-token', token);
    return this.http.get<LoginResponse>(url, { headers });
  }
}

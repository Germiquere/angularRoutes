import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';



@Injectable({providedIn: 'root'})
export class AdminRolGuard implements CanActivate {
    constructor(private authService :AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authService.currentUser?.type === "admin") return true
        return false
    }
    
}
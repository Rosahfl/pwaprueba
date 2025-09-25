import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Layout } from './layout/layout';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export const routes: Routes = [
  { path:'', component:Layout},
  { path:'home', component:Home},         // Página principal        // Ruta UI
  { path:'header', component: Header },   // Ruta About
  { path:'footer', component: Footer } 
];
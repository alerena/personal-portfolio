import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "personal-portfolio-f8e7f", appId: "1:844593443252:web:379fd1af1d9c2548f002e1", storageBucket: "personal-portfolio-f8e7f.firebasestorage.app", apiKey: "AIzaSyCHG4E4p_AFh2mwLS6uz8ZDvVGdHIv0nfY", authDomain: "personal-portfolio-f8e7f.firebaseapp.com", messagingSenderId: "844593443252", measurementId: "G-7FEPKRQLZL" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};

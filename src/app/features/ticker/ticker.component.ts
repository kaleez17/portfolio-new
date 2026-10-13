import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full bg-sun-400 py-3.5 overflow-hidden shadow-inner border-y border-sun-500/30">
      <div class="flex whitespace-nowrap animate-marquee font-display font-extrabold text-forest-900 text-sm sm:text-base tracking-wider uppercase">
        <span class="flex items-center gap-5 px-3">
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Java 21</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Spring Boot 3</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Angular 19</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Microservices</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">RESTful APIs</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">SQL Databases</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Postman Testing</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">25+ GitHub Projects</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Three.js 3D</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">TypeScript</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Lissomsoft Trainee</span>
        </span>
        <span class="flex items-center gap-5 px-3">
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Java 21</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Spring Boot 3</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Angular 19</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Microservices</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">RESTful APIs</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">SQL Databases</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Postman Testing</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">25+ GitHub Projects</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Three.js 3D</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">TypeScript</span>
          <span class="px-4 py-1 rounded-full bg-forest-900/10">Lissomsoft Trainee</span>
        </span>
      </div>
    </div>
  `
})
export class TickerComponent {}

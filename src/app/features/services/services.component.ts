import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-24 px-4 sm:px-8 bg-[#FAF9F6]">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">— Services</span>
            <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1">
              Services <span class="text-sun-500">I Provide</span>
            </h2>
          </div>
          <a href="#projects" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-850 text-white text-xs font-semibold hover:bg-forest-900 transition-all self-start sm:self-auto">
            <span>View All Services</span>
            <span class="text-sun-400">→</span>
          </a>
        </div>

        <!-- 3-Column Services Cards (from video) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let svc of services" 
               class="bg-white p-8 rounded-3xl border border-slate-200/80 ref-card-shadow ref-card-hover flex flex-col justify-between space-y-6">
            
            <div class="space-y-4">
              <!-- Icon badge -->
              <div class="w-12 h-12 rounded-2xl bg-forest-900/5 text-forest-850 flex items-center justify-center text-2xl font-bold">
                <span *ngIf="svc.icon === 'code'">⚡</span>
                <span *ngIf="svc.icon === 'layers'">🅰️</span>
                <span *ngIf="svc.icon === 'database'">🗄️</span>
              </div>

              <!-- Title -->
              <h3 class="font-display font-bold text-xl text-slate-900">{{ svc.title }}</h3>

              <!-- Description -->
              <p class="text-slate-600 text-sm leading-relaxed font-normal">
                {{ svc.description }}
              </p>
            </div>

            <!-- Learn More link with arrow -->
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-sun-500 transition-colors">
                <span>Learn more</span>
                <span class="text-sun-500">→</span>
              </a>
              <div class="flex gap-1.5">
                <span *ngFor="let t of svc.tags.slice(0, 2)" class="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono text-slate-600">
                  {{ t }}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  public services = SERVICES_DATA;
}

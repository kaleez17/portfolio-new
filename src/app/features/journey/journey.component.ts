import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JOURNEY_DATA } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="journey" class="py-24 px-4 sm:px-8 bg-[#FAF9F6]">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <div class="text-center">
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">— Education & Work</span>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1">
            My Academic and <br>
            <span class="text-sun-500">Professional Journey</span>
          </h2>
        </div>

        <!-- 2 Equal Side-by-Side Cards (from video) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Education Card -->
          <div class="bg-white p-8 rounded-3xl border border-slate-200/90 ref-card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div class="w-10 h-10 rounded-xl bg-sun-400/20 text-sun-600 flex items-center justify-center text-xl font-bold">
                🎓
              </div>
              <h3 class="font-display font-bold text-xl text-slate-900">Education</h3>
            </div>

            <div class="space-y-6">
              <div *ngFor="let edu of journey.education" class="space-y-1 border-l-2 border-sun-400 pl-4">
                <span class="text-xs font-mono font-bold text-slate-400">{{ edu.period }}</span>
                <h4 class="font-display font-bold text-base text-slate-900">{{ edu.institution }}</h4>
                <p class="text-sm text-slate-600">{{ edu.degree }}</p>
                <span class="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                  {{ edu.grade }}
                </span>
              </div>
            </div>
          </div>

          <!-- Work Experience Card -->
          <div class="bg-white p-8 rounded-3xl border border-slate-200/90 ref-card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div class="w-10 h-10 rounded-xl bg-forest-900/10 text-forest-850 flex items-center justify-center text-xl font-bold">
                💼
              </div>
              <h3 class="font-display font-bold text-xl text-slate-900">Work Experience</h3>
            </div>

            <div class="space-y-6">
              <div *ngFor="let exp of journey.experience" class="space-y-1 border-l-2 border-forest-850 pl-4">
                <span class="text-xs font-mono font-bold text-slate-400">{{ exp.period }}</span>
                <h4 class="font-display font-bold text-base text-slate-900">{{ exp.company }}</h4>
                <div class="text-xs font-semibold text-forest-850">{{ exp.role }} • {{ exp.location }}</div>
                <p class="text-xs text-slate-600 leading-relaxed mt-1">{{ exp.summary }}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class JourneyComponent {
  public journey = JOURNEY_DATA;
}

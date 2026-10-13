import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS_DATA } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-4 sm:px-8 bg-[#FAF9F6] border-t border-slate-200/60">
      <div class="max-w-5xl mx-auto space-y-12 text-center">
        
        <div>
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">— Clients Testimonials</span>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1">
            The Impact of My Work: <br>
            <span class="text-sun-500">Professional Feedback</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div *ngFor="let t of testimonials" 
               class="bg-white p-8 rounded-3xl border border-slate-200/90 ref-card-shadow space-y-4">
            <div class="text-sun-500 text-sm font-bold">★★★★★ 5.0</div>
            <p class="text-slate-600 text-sm leading-relaxed italic">
              "{{ t.quote }}"
            </p>
            <div class="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-forest-900/10 text-forest-850 flex items-center justify-center font-bold text-sm">
                {{ t.name[0] }}
              </div>
              <div>
                <div class="font-display font-bold text-sm text-slate-900">{{ t.name }}</div>
                <div class="text-xs text-slate-500">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class TestimonialsComponent {
  public testimonials = TESTIMONIALS_DATA;
}

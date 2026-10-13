import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRICING_DATA } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pricing" class="py-24 px-4 sm:px-8 bg-forest-850 text-white">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">— Pricing Table</span>
            <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
              My <span class="text-sun-400">Pricing Model</span>
            </h2>
          </div>
          <a href="#contact" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sun-400 text-forest-900 text-xs font-bold hover:bg-sun-500 transition-all self-start sm:self-auto">
            <span>Get Started</span>
            <span class="w-4 h-4 rounded-full bg-forest-900 text-white flex items-center justify-center text-[10px]">→</span>
          </a>
        </div>

        <!-- 3 Tier Cards (Exact from video with middle card in radiant yellow) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div *ngFor="let tier of tiers" 
               [class.bg-sun-400]="tier.highlighted"
               [class.text-forest-900]="tier.highlighted"
               [class.bg-forest-900]="!tier.highlighted"
               [class.text-white]="!tier.highlighted"
               class="p-8 rounded-3xl border border-forest-700/60 shadow-xl flex flex-col justify-between space-y-6 ref-card-hover">
            
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-bold uppercase tracking-wider">{{ tier.tier }}</span>
                <span class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                      [class.bg-forest-900]="tier.highlighted"
                      [class.text-white]="tier.highlighted"
                      [class.bg-forest-800]="!tier.highlighted"
                      [class.text-sun-400]="!tier.highlighted">
                  ↗
                </span>
              </div>

              <div>
                <span class="font-display font-black text-3xl sm:text-4xl">{{ tier.rate }}</span>
                <span class="text-xs opacity-80">{{ tier.period }}</span>
              </div>

              <!-- Features list with checkmarks -->
              <ul class="space-y-2.5 pt-4 border-t"
                  [class.border-forest-900/20]="tier.highlighted"
                  [class.border-forest-800]="!tier.highlighted">
                <li *ngFor="let f of tier.features" class="flex items-start gap-2 text-xs">
                  <span [class.text-forest-900]="tier.highlighted" [class.text-sun-400]="!tier.highlighted">✓</span>
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>

            <a href="#contact" 
               [class.bg-forest-900]="tier.highlighted"
               [class.text-white]="tier.highlighted"
               [class.bg-sun-400]="!tier.highlighted"
               [class.text-forest-900]="!tier.highlighted"
               class="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all block shadow-md">
              {{ tier.ctaText }}
            </a>

          </div>
        </div>

      </div>
    </section>
  `
})
export class PricingComponent {
  public tiers = PRICING_DATA;
}

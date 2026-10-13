import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TOOLS_DATA } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tools" class="py-24 px-4 sm:px-8 bg-[#FAF9F6]">
      <div class="max-w-5xl mx-auto text-center space-y-12">
        
        <div>
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">— My Favorite Tools</span>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1">
            Exploring the Tools <br>
            <span class="text-sun-500">Behind My Architecture</span>
          </h2>
        </div>

        <!-- Circular Tool Percentage Badges (Exact 6-circle grid from video) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 justify-center">
          <div *ngFor="let tool of tools" 
               class="flex flex-col items-center space-y-3 group">
            
            <!-- Circular Card with Tool Icon & Percentage -->
            <div class="w-24 h-24 rounded-full bg-white border border-slate-200/90 shadow-sm ref-card-hover flex flex-col items-center justify-center relative">
              <span class="text-2xl">{{ tool.icon }}</span>
              <span class="font-display font-bold text-xs text-slate-800 mt-1">{{ tool.level }}%</span>
            </div>

            <!-- Tool Name -->
            <span class="text-xs font-semibold text-slate-700 group-hover:text-forest-850 transition-colors">
              {{ tool.name }}
            </span>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ToolsComponent {
  public tools = TOOLS_DATA;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS_DATA } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-24 px-4 sm:px-8 bg-white border-t border-slate-200/60">
      <div class="max-w-6xl mx-auto space-y-12">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">— My Portfolio</span>
            <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1">
              My Latest <span class="text-sun-500">Projects</span>
            </h2>
          </div>
          <a href="https://github.com/kaleez17" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest-850 text-white text-xs font-semibold hover:bg-forest-900 transition-all self-start sm:self-auto">
            <span>View All 25+ Projects on GitHub</span>
            <span class="w-5 h-5 rounded-full bg-sun-400 text-forest-900 flex items-center justify-center text-[10px] font-bold">→</span>
          </a>
        </div>

        <!-- 2x2 Project Showcase Grid (Exact design from video) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let proj of projects" 
               class="bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-slate-200/90 ref-card-shadow ref-card-hover flex flex-col justify-between space-y-6 group">
            
            <!-- Angled Card Preview Mockup Area -->
            <div class="w-full h-56 rounded-2xl bg-gradient-to-br {{ proj.imageBg }} p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-inner">
              <div class="flex justify-between items-start">
                <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono">
                  {{ proj.category }}
                </span>
                <span class="text-sun-400 text-xs font-mono">★ GitHub Repo</span>
              </div>
              <div>
                <h4 class="font-display font-extrabold text-xl text-white">{{ proj.title }}</h4>
                <p class="text-slate-300 text-xs line-clamp-2 mt-1">{{ proj.description }}</p>
              </div>
            </div>

            <!-- Tags & Action Link from Video -->
            <div class="space-y-4">
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tag of proj.tags" class="px-3 py-1 rounded-full bg-sun-400/20 text-forest-900 text-xs font-semibold">
                  {{ tag }}
                </span>
              </div>

              <div class="flex items-center justify-between pt-2">
                <h3 class="font-display font-bold text-lg text-slate-900 group-hover:text-forest-850 transition-colors">
                  {{ proj.title }}
                </h3>

                <a [href]="proj.githubUrl" target="_blank" rel="noopener noreferrer" 
                   class="w-10 h-10 rounded-full bg-forest-850 text-white flex items-center justify-center group-hover:bg-sun-400 group-hover:text-forest-900 transition-all shadow-sm">
                  →
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  public projects = PROJECTS_DATA;
}

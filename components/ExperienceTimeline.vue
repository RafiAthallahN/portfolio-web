<script setup lang="ts">
import { Briefcase } from 'lucide-vue-next';
import type { PortfolioData } from '~/composables/usePortfolioData';

defineProps<{
  timeline: PortfolioData['experience']['timeline']
}>();
</script>

<template>
  <div class="relative border-l-2 border-blue-500/30 pl-6 ml-3 space-y-8 py-4">
    <div
      v-for="(item, index) in timeline"
      :key="index"
      class="relative"
    >
      <!-- Timeline Dot -->
      <div class="absolute -left-[35px] top-4 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"></div>

      <!-- Glass Card -->
      <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-lg hover:border-blue-500/30 transition-colors group">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
          <h4 class="text-lg font-bold text-white flex items-center gap-2">
            <Briefcase class="w-4 h-4 text-blue-400" />
            {{ item.role }}
          </h4>
          <span class="text-xs font-medium text-blue-300 bg-blue-900/30 px-2.5 py-1 rounded-full border border-blue-500/20 whitespace-nowrap">
            {{ item.period }}
          </span>
        </div>

        <div class="text-sm text-slate-300 font-medium mb-3 flex items-center gap-2">
          <span class="text-white">{{ item.company }}</span>
          <span class="text-slate-600">•</span>
          <span>{{ item.location }}</span>
        </div>

        <p class="text-sm text-slate-400 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

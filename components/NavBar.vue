<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
</script>

<template>
  <nav class="fixed top-0 inset-x-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <div class="flex-shrink-0 flex items-center gap-2">
          <span class="text-xl font-bold tracking-tighter text-white">RAN.</span>
        </div>

        <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300">
          <div class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </div>
          <MapPin class="w-4 h-4 text-slate-400" />
          <span>Tulungagung, Indonesia • Available for Opportunities</span>
        </div>

      </div>
    </div>
  </nav>
</template>

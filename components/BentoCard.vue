<script setup lang="ts">
import { computed } from 'vue';
import * as lucideIcons from 'lucide-vue-next';

interface Props {
  title?: string;
  subtitle?: string;
  badge?: string;
  icon?: string;
  spanClasses?: string;
  accentColor?: 'blue' | 'sky' | 'indigo' | 'cyan' | 'gradient';
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  spanClasses: 'col-span-1 row-span-1',
  accentColor: 'blue',
  delay: 0
});

const emit = defineEmits<{
  (e: 'open-modal'): void;
}>();

const resolvedIcon = computed(() => {
  if (props.icon && (lucideIcons as any)[props.icon]) {
    return (lucideIcons as any)[props.icon];
  }
  return null;
});

const hoverBorderClass = computed(() => {
  switch (props.accentColor) {
    case 'sky': return 'hover:border-sky-400/50';
    case 'indigo': return 'hover:border-indigo-500/50';
    case 'cyan': return 'hover:border-cyan-500/50';
    case 'gradient': return 'hover:border-white/40';
    default: return 'hover:border-blue-500/50';
  }
});

const backgroundClass = computed(() => {
  if (props.accentColor === 'gradient') {
    return 'bg-gradient-to-br from-blue-600 to-indigo-600 border-white/20 hover:shadow-indigo-500/25';
  }
  return 'bg-slate-900/60 hover:bg-white/10 border-white/10';
});
</script>

<template>
  <button
    type="button"
    @click="emit('open-modal')"
    class="bento-card group relative flex flex-col justify-between p-6 rounded-3xl text-left transition-all duration-300 ease-out backdrop-blur-xl border shadow-[0_8px_30px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950 opacity-0 animate-slide-up"
    :class="[spanClasses, hoverBorderClass, backgroundClass]"
    :style="{ animationDelay: `${delay}ms` }"
    :aria-label="title || 'Open detail modal'"
  >
    <!-- Background glow effect on hover -->
    <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div class="relative z-10 w-full flex items-start justify-between">
      <div v-if="badge" class="px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/20 text-white/90 backdrop-blur-md">
        {{ badge }}
      </div>
      <component v-if="resolvedIcon" :is="resolvedIcon" class="w-6 h-6 text-white/70 group-hover:text-white transition-colors ml-auto" />
    </div>

    <div class="relative z-10 w-full mt-auto">
      <h3 v-if="title" class="text-xl font-semibold text-white tracking-tight leading-tight mb-2" :class="{'text-2xl': spanClasses.includes('col-span-2')}">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="text-sm text-white/70 line-clamp-3">
        {{ subtitle }}
      </p>
    </div>
  </button>
</template>

<style scoped>
.animate-slide-up {
  animation-fill-mode: both;
}
</style>

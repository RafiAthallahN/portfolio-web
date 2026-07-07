<script setup lang="ts">
import { ref, watch } from 'vue';
import { useScrollLock, onClickOutside, onKeyStroke } from '@vueuse/core';
import { X } from 'lucide-vue-next';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const modalRef = ref<HTMLElement | null>(null);
const isLocked = useScrollLock(typeof document !== 'undefined' ? document.body : null);

watch(() => props.isOpen, (newVal) => {
  if (typeof window !== 'undefined') {
    isLocked.value = newVal;
  }
});

onClickOutside(modalRef, () => {
  if (props.isOpen) emit('close');
});

onKeyStroke('Escape', () => {
  if (props.isOpen) emit('close');
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md">
        <div
          ref="modalRef"
          class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-3xl shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div class="sticky top-0 z-10 flex justify-end p-4 bg-slate-900/80 backdrop-blur-sm border-b border-white/10 rounded-t-3xl">
            <button
              @click="emit('close')"
              class="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Close modal"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <div class="p-6 sm:p-8">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Scrollbar styling for modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="mt-20 py-8 border-t border-white/10 text-center text-slate-400 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p>&copy; {{ currentYear }} Rafi Athallah Nabil. All rights reserved.</p>
      <div class="flex items-center gap-4">
        <a href="https://github.com/RafiAthallahN" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/rafi-athallah-nabil" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">LinkedIn</a>
        <a href="mailto:rafiathallahnabil@gmail.com" class="hover:text-white transition-colors">Email</a>
      </div>
    </div>
  </footer>
</template>

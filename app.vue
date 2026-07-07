<script setup lang="ts">
import { ref } from 'vue';
import { usePortfolioData } from '~/composables/usePortfolioData';

const { portfolioData } = usePortfolioData();

type ActiveModal = 'hero' | 'experience' | 'techStack' | 'education' | 'contact' | null;
const activeModal = ref<ActiveModal>(null);

const openModal = (modalId: ActiveModal) => {
  activeModal.value = modalId;
};

const closeModal = () => {
  activeModal.value = null;
};
</script>

<template>
  <div class="min-h-screen selection:bg-blue-500/30 selection:text-white">
    <NavBar />

    <main class="pb-10 pt-8 sm:pt-16">
      <BentoGrid>

        <!-- Hero / About Me -->
        <BentoCard
          spanClasses="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-2"
          :badge="portfolioData.hero.badge"
          :title="portfolioData.hero.title"
          :subtitle="portfolioData.hero.summary"
          icon="User"
          :delay="100"
          @open-modal="openModal('hero')"
        />

        <!-- Work Experience -->
        <BentoCard
          spanClasses="col-span-1 sm:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2"
          :badge="portfolioData.experience.badge"
          title="Work Experience"
          :subtitle="portfolioData.experience.summary"
          icon="Briefcase"
          accentColor="indigo"
          :delay="200"
          @open-modal="openModal('experience')"
        />

        <!-- Tech Stack -->
        <BentoCard
          spanClasses="col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 lg:row-span-2"
          :title="portfolioData.techStack.title"
          :subtitle="portfolioData.techStack.summary"
          icon="Code2"
          accentColor="sky"
          :delay="300"
          @open-modal="openModal('techStack')"
        />

        <!-- Education -->
        <BentoCard
          spanClasses="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1"
          title="Education"
          :subtitle="portfolioData.education.summary"
          icon="GraduationCap"
          accentColor="cyan"
          :delay="400"
          @open-modal="openModal('education')"
        />

        <!-- Contact -->
        <BentoCard
          spanClasses="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1"
          :title="portfolioData.contact.title"
          subtitle="Let's build something amazing together."
          icon="Mail"
          accentColor="gradient"
          :delay="500"
          @open-modal="openModal('contact')"
        />

      </BentoGrid>
    </main>

    <FooterSection />

    <!-- Modals -->
    <GlassModal :is-open="activeModal === 'hero'" @close="closeModal">
      <div class="space-y-6">
        <div>
          <h2 class="text-3xl font-bold text-white mb-2">{{ portfolioData.hero.title }}</h2>
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium">
            {{ portfolioData.hero.badge }}
          </div>
        </div>
        <p class="text-lg text-slate-300 leading-relaxed">
          {{ portfolioData.hero.modalDetail.description }}
        </p>
        <div class="pt-6 border-t border-white/10">
          <h3 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Connect on</h3>
          <div class="flex flex-wrap gap-4">
            <a
              v-for="link in portfolioData.hero.modalDetail.links"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </GlassModal>

    <GlassModal :is-open="activeModal === 'experience'" @close="closeModal">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-white">Work Experience</h2>
        <p class="text-slate-400">{{ portfolioData.experience.summary }}</p>
        <ExperienceTimeline :timeline="portfolioData.experience.timeline" />
      </div>
    </GlassModal>

    <GlassModal :is-open="activeModal === 'techStack'" @close="closeModal">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-white">{{ portfolioData.techStack.title }}</h2>
        <p class="text-slate-400">{{ portfolioData.techStack.summary }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div
            v-for="category in portfolioData.techStack.categories"
            :key="category.name"
            class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-lg hover:border-sky-500/30 transition-colors"
          >
            <h4 class="text-lg font-bold text-white mb-3">{{ category.name }}</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in category.skills"
                :key="skill"
                class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 border border-slate-700 text-slate-300"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </GlassModal>

    <GlassModal :is-open="activeModal === 'education'" @close="closeModal">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-white">Education</h2>
        <p class="text-slate-400">{{ portfolioData.education.summary }}</p>

        <div class="space-y-4">
          <div
            v-for="edu in portfolioData.education.details"
            :key="edu.degree"
            class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-lg"
          >
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <h4 class="text-lg font-bold text-white">{{ edu.degree }}</h4>
              <span class="text-xs font-medium text-cyan-300 bg-cyan-900/30 px-2.5 py-1 rounded-full border border-cyan-500/20 whitespace-nowrap">
                {{ edu.period }}
              </span>
            </div>
            <div class="text-sm text-slate-300 font-medium mb-3 flex items-center gap-2">
              <span class="text-white">{{ edu.institution }}</span>
              <span class="text-slate-600">•</span>
              <span>{{ edu.location }}</span>
            </div>
            <p class="text-sm text-slate-400">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </GlassModal>

    <GlassModal :is-open="activeModal === 'contact'" @close="closeModal">
      <div class="space-y-8 text-center py-6">
        <h2 class="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
          {{ portfolioData.contact.title }}
        </h2>

        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            :href="`mailto:${portfolioData.contact.email}`"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-500/25"
          >
            Email Me
          </a>
          <a
            :href="`https://wa.me/${portfolioData.contact.phone.replace(/[^0-9]/g, '')}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </GlassModal>

  </div>
</template>

<style>
/* Global transition settings can be added here if needed */
</style>

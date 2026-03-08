<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <UApp>
    <div class="min-h-screen flex flex-col bg-white dark:bg-zinc-950 transition-colors duration-200">

      <!-- Page Content -->
      <main class="flex-1">
        <slot />
      </main>

      <!-- Footer -->
      <footer class="bg-zinc-900 border-t border-zinc-800 py-6 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-sm text-zinc-500">
            &copy; {{ year }} Technicom Corporation. All rights reserved.
          </p>
        </div>
      </footer>

    </div>

    <!-- Cookie consent banner (rendered outside page flow, fixed to viewport bottom) -->
    <CookieBanner />
  </UApp>
</template>

<script setup lang="ts">
// Uses a cookie so consent persists for 1 year across page loads.
// This site uses no tracking or analytics cookies — the banner is informational only.
const consent = useCookie<boolean | null>('cookie-consent', {
  default: () => null,
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax',
})

const show = computed(() => consent.value === null)

function accept() {
  consent.value = true
}

function dismiss() {
  // Dismissed without explicit acceptance — record so banner doesn't reappear
  consent.value = false
}
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="show"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none"
    >
      <UCard
        class="max-w-4xl mx-auto shadow-2xl pointer-events-auto
               border-gray-200 dark:border-zinc-700"
      >
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          <div class="flex items-start gap-3 flex-1 min-w-0">
            <UIcon
              name="i-heroicons-shield-check"
              class="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
            />
            <div>
              <p class="font-semibold text-gray-900 dark:text-white text-base">Cookie Notice</p>
              <p class="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
                This site uses only essential session cookies required for proper functionality.
                No tracking, analytics, or third-party cookies are used.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-3 shrink-0 self-end sm:self-center">
            <UButton
              variant="ghost"
              color="neutral"
              size="sm"
              label="Dismiss"
              @click="dismiss"
            />
            <UButton
              color="primary"
              size="sm"
              label="Got it"
              @click="accept"
            />
          </div>

        </div>
      </UCard>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(110%);
  opacity: 0;
}
</style>

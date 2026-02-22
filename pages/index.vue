<script setup lang="ts">
  useSeoMeta({
    title: "Technicom Corporation — Tower Space Leasing",
    description:
      "Technicom Corporation provides communication tower space leasing and co-location services for wireless carriers and technology providers.",
  })
  useHead({
    link: [{ rel: 'canonical', href: 'https://www.technicomcorp.com' }],
  })
</script>

<template>
  <div>
    <!-- ─── Top row: logo + color mode toggle (scrolls with page) ─── -->
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex items-center justify-between">
      <!-- Logo wrapped in dark pill so it reads in both light and dark mode -->
      <NuxtLink to="/" class="shrink-0">
        <Logo class="h-16 w-auto text-zinc-700 dark:text-zinc-200" />
      </NuxtLink>

      <UColorModeButton size="md" />
    </div>

    <!-- ─── Hero Section ─── -->
    <section class="pt-8 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Company Description -->
        <div>
          <h1
            class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Tower Space
            <span class="text-orange-600">Leasing &amp;</span>
            Co-Location Services
          </h1>

          <div class="w-16 h-1 bg-orange-600 rounded-full mb-6" />

          <p
            class="text-lg lg:text-lg text-gray-600 dark:text-zinc-300 leading-relaxed mb-6">
            Technicom Corporation is a communication tower company providing
            tower space leasing and co-location services to telecommunications
            carriers, wireless internet service providers, and other wireless
            technology companies in the greater Milwaukee area.
          </p>

          <p
            class="text-lg lg:text-lg text-gray-600 dark:text-zinc-300 leading-relaxed mb-6">
            Our strategically located tower facility provides secure,
            carrier-grade co-location with flexible lease structures tailored to
            your infrastructure requirements. From major carriers to regional
            operators, we work with you to structure the right co-location
            agreement for your equipment.
          </p>

          <p class="text-lg lg:text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">Contact us at info@technicomcorp.com
            to start the conversation.</p>
        </div>

        <!-- Tower Photo — crop to 3:4 portrait (e.g. 900×1200px) for best fit -->
        <div class="relative aspect-[3/4] rounded-2xl overflow-hidden">
          <img
            src="/tower.jpg"
            alt="Technicom Tower"
            class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- ─── Divider ─── -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="h-px bg-gray-200 dark:bg-zinc-800" />
    </div>

    <!-- ─── Contact Section ─── -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Contact Us
          </h2>
          <p class="text-lg text-gray-500 dark:text-zinc-400">
            Reach out for leasing inquiries or tower site emergencies.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- ── General Contact Card ── -->
          <UCard
            class="h-full bg-white dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700"
            :ui="{
              header: 'border-b border-zinc-200 dark:border-zinc-700 pb-4',
              body: 'pt-6',
            }">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-2 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <UIcon
                    name="i-heroicons-building-office-2"
                    class="w-6 h-6 text-orange-600" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  General Contact
                </h3>
              </div>
            </template>

            <ul class="space-y-5">
              <!-- Name — TODO: fill in -->
              <li class="flex items-start gap-3">
                <UIcon
                  name="i-heroicons-user"
                  class="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <p class="text-sm text-gray-500 dark:text-zinc-400">
                    Contact
                  </p>
                  <!-- TODO: Replace with actual name -->
                  <p class="font-semibold text-gray-900 dark:text-white">
                    Ian Kluhsman
                  </p>
                </div>
              </li>

              <!-- Phone — TODO: fill in -->
              <li class="flex items-start gap-3">
                <UIcon
                  name="i-heroicons-phone"
                  class="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <p class="text-sm text-gray-500 dark:text-zinc-400">Phone</p>
                  <!-- TODO: Replace href and display text with actual number -->
                  <a
                    href="tel:+7209353871"
                    class="font-semibold text-orange-600 hover:text-orange-700 dark:hover:text-orange-500 transition-colors">
                    (720) 935-3871
                  </a>
                </div>
              </li>

              <!-- Email — TODO: fill in -->
              <li class="flex items-start gap-3">
                <UIcon
                  name="i-heroicons-envelope"
                  class="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <p class="text-sm text-gray-500 dark:text-zinc-400">Email</p>
                  <!-- TODO: Replace with actual email -->
                  <a
                    href="mailto:info@technicomcorp.com"
                    class="font-semibold text-orange-600 hover:text-orange-700 dark:hover:text-orange-500 transition-colors">
                    info@technicomcorp.com
                  </a>
                </div>
              </li>

              <!-- Address — TODO: fill in -->
              <li class="flex items-start gap-3">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <p class="text-sm text-gray-500 dark:text-zinc-400">
                    Mailing Address
                  </p>
                  <!-- TODO: Replace with actual address (PO Box once you have it) -->
                  <p class="font-semibold text-gray-900 dark:text-white">
                    3707 S Mission Pkwy<br />
                    Aurora, CO 80013
                  </p>
                </div>
              </li>
            </ul>
          </UCard>

          <!-- ── Emergency Contact Card ── -->
          <UCard
            class="h-full bg-white dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700"
            :ui="{
              header: 'border-b border-zinc-200 dark:border-zinc-700 pb-4',
              body: 'pt-6',
            }">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-2 bg-red-100 dark:bg-red-950 rounded-lg">
                  <UIcon
                    name="i-heroicons-exclamation-triangle"
                    class="w-6 h-6 text-red-600" />
                </div>
                <h3 class="text-xl font-bold text-red-600">
                  Tower Emergency
                </h3>
              </div>
            </template>

            <div class="space-y-5">
              <UAlert
                icon="i-heroicons-information-circle"
                color="warning"
                variant="soft"
                title="Urgent Issues"
                description="For tower site outages, structural concerns, or any situation requiring immediate on-site response, use the emergency line below." />

              <!-- Emergency Phone — TODO: fill in -->
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-heroicons-phone-arrow-up-right"
                  class="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <p class="text-sm text-gray-500 dark:text-zinc-400">
                    Emergency Line
                  </p>
                  <!-- TODO: Replace with actual emergency number -->
                  <a
                    href="tel:+17209353871"
                    class="text-xl font-bold text-orange-600 hover:text-orange-700 dark:hover:text-orange-500 transition-colors">
                    +1 (720) 935-3871
                  </a>
                  <br />
                  <a
                    href="tel:+13039606757"
                    class="text-xl font-bold text-orange-600 hover:text-orange-700 dark:hover:text-orange-500 transition-colors">
                    +1 (303) 960-6757
                  </a>
                </div>
              </div>

              <!-- Tower Address — TODO: fill in -->
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <p class="text-sm text-gray-500 dark:text-zinc-400">
                    Tower Site Address
                  </p>
                  <!-- TODO: Replace with actual site address -->
                  <p class="font-semibold text-gray-900 dark:text-white">
                    W219 S7884 Crowbar Dr.<br />
                    Muskego, WI 53150
                  </p>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>


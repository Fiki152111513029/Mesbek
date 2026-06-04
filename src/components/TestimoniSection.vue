<script setup lang="ts">
import { testimonials } from '@/data/testimonials'
import { StarIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <section id="testimoni" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-14">
        <span class="text-orange-500 font-semibold text-sm uppercase tracking-widest">Kata Mereka</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-blue-900">Testimoni Pelanggan</h2>
        <p class="mt-3 text-gray-500 max-w-xl mx-auto">
          Ribuan pelanggan telah mempercayakan kebutuhan mesin industri mereka kepada kami.
        </p>
      </div>

      <!-- Testimonial cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="testi in testimonials"
          :key="testi.id"
          class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <!-- Quote mark -->
          <div class="text-6xl text-orange-200 font-serif leading-none mb-3 select-none">"</div>

          <!-- Rating -->
          <div class="flex gap-0.5 mb-4">
            <StarIcon
              v-for="i in testi.rating"
              :key="i"
              class="w-4 h-4 text-orange-400"
            />
          </div>

          <!-- Text -->
          <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
            "{{ testi.text }}"
          </p>

          <!-- Avatar & Info -->
          <div class="flex items-center gap-3 border-t border-gray-100 pt-4">
            <img
              :src="testi.avatar"
              :alt="testi.name"
              class="w-12 h-12 rounded-full object-cover ring-2 ring-orange-200"
            />
            <div>
              <div class="font-bold text-blue-900 text-sm">{{ testi.name }}</div>
              <div class="text-gray-400 text-xs">{{ testi.role }}</div>
              <div class="text-orange-500 text-xs font-medium">{{ testi.company }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary bar -->
      <div class="mt-12 bg-blue-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="text-center sm:text-left">
          <div class="text-3xl font-extrabold text-white">4.9 / 5.0</div>
          <div class="flex gap-0.5 justify-center sm:justify-start mt-1">
            <StarIcon v-for="i in 5" :key="i" class="w-4 h-4 text-orange-400" />
          </div>
          <div class="text-blue-300 text-sm mt-1">Berdasarkan 3.200+ ulasan</div>
        </div>
        <a
          href="#"
          class="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 text-sm"
        >
          Baca Semua Testimoni
        </a>
      </div>
    </div>
  </section>
</template>

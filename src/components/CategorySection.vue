<script setup lang="ts">
import { categories } from '@/data/categories'

const categoryImages: Record<string, string> = {
  cnc: 'https://picsum.photos/seed/cnc-mach/200/140',
  forklift: 'https://picsum.photos/seed/fork-lift/200/140',
  generator: 'https://picsum.photos/seed/genset-gen/200/140',
  production: 'https://picsum.photos/seed/prod-mach/200/140',
  printing: 'https://picsum.photos/seed/print-mach/200/140',
  heavy: 'https://picsum.photos/seed/heavy-eq/200/140',
  agriculture: 'https://picsum.photos/seed/agri-farm/200/140',
  food: 'https://picsum.photos/seed/food-proc/200/140',
}

function formatCount(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : `${n}`
}
</script>

<template>
  <section id="kategori" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-12">
        <span class="text-orange-500 font-semibold text-sm uppercase tracking-widest">Jelajahi</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-blue-900">Kategori Mesin</h2>
        <p class="mt-3 text-gray-500 max-w-xl mx-auto">
          Temukan mesin yang Anda butuhkan dari berbagai kategori industri terlengkap.
        </p>
      </div>

      <!-- Category grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        <a
          v-for="cat in categories"
          :key="cat.id"
          href="#"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-32 bg-blue-50">
            <img
              :src="categoryImages[cat.icon]"
              :alt="cat.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
          </div>

          <!-- Info -->
          <div class="p-4">
            <h3 class="font-bold text-blue-900 text-sm mb-1 group-hover:text-orange-500 transition-colors">
              {{ cat.name }}
            </h3>
            <p class="text-gray-400 text-xs">{{ formatCount(cat.count) }} produk</p>
          </div>
        </a>
      </div>

      <div class="text-center mt-10">
        <a
          href="#"
          class="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
        >
          Lihat Semua Kategori
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

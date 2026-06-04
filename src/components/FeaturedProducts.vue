<script setup lang="ts">
import { products } from '@/data/products'
import type { Condition } from '@/data/products'
import { MapPinIcon, CalendarIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

const conditionColors: Record<Condition, string> = {
  'Sangat Baik': 'bg-green-100 text-green-700',
  'Baik': 'bg-blue-100 text-blue-700',
  'Cukup': 'bg-yellow-100 text-yellow-700',
}
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <span class="text-orange-500 font-semibold text-sm uppercase tracking-widest">Pilihan Terbaik</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-blue-900">Produk Unggulan</h2>
        <p class="mt-3 text-gray-500 max-w-xl mx-auto">
          Mesin pilihan berkualitas dengan harga terbaik dari seller terverifikasi seluruh Indonesia.
        </p>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Product Image -->
          <div class="relative overflow-hidden h-48 bg-gray-100">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute top-3 left-3">
              <span
                :class="['text-xs font-semibold px-2.5 py-1 rounded-full', conditionColors[product.condition]]"
              >
                {{ product.condition }}
              </span>
            </div>
            <div class="absolute top-3 right-3 bg-blue-900/80 text-white text-xs px-2 py-1 rounded-lg">
              {{ product.category }}
            </div>
          </div>

          <!-- Product Info -->
          <div class="p-5">
            <h3 class="font-bold text-gray-900 text-base mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
              {{ product.name }}
            </h3>

            <div class="space-y-2 mb-4 text-sm text-gray-500">
              <div class="flex items-center gap-2">
                <MapPinIcon class="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span class="truncate">{{ product.location }}</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <CalendarIcon class="w-4 h-4 text-gray-400" />
                  <span>{{ product.year }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <WrenchScrewdriverIcon class="w-4 h-4 text-gray-400" />
                  <span>{{ product.condition }}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-gray-100">
              <div>
                <div class="text-xs text-gray-400 mb-0.5">Harga</div>
                <div class="text-lg font-extrabold text-orange-500">
                  {{ formatPrice(product.price) }}
                </div>
              </div>
              <a
                href="#"
                class="bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Lihat Detail
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-10">
        <a
          href="#"
          class="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-md"
        >
          Lihat Semua Produk
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600"></div>

    <!-- Decorative circles -->
    <div class="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-6">
        <span class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
        Bergabunglah Sekarang — Gratis!
      </div>

      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
        Siap Menjual atau Membeli
        <span class="text-orange-400">Mesin Bekas?</span>
      </h2>

      <p class="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
        Bergabunglah dengan 5.000+ seller dan ratusan ribu pembeli aktif di platform jual beli mesin bekas terpercaya Indonesia.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#"
          class="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-orange-500/40 hover:-translate-y-0.5"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Jual Mesin
        </a>
        <a
          href="#"
          class="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          Cari Mesin
        </a>
      </div>

      <p class="text-blue-300 text-sm mt-8">
        Tidak ada biaya pendaftaran. Mulai berjualan dalam 5 menit.
      </p>
    </div>
  </section>
</template>

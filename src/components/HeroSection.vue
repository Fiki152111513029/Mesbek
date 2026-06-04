<script setup lang="ts">
</script>

<template>
  <section
    id="beranda"
    class="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-5"
      style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 40px 40px;">
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            Platform #1 Mesin Bekas di Indonesia
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Marketplace Jual Beli
            <span class="text-orange-400"> Mesin Bekas</span>
            Terpercaya di Indonesia
          </h1>

          <p class="text-blue-200 text-lg sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Temukan mesin industri berkualitas dengan harga terbaik atau jual mesin bekas Anda dengan mudah dan aman bersama ribuan seller terverifikasi.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#kategori"
              class="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-400/40 hover:-translate-y-0.5"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              Cari Mesin
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              Jual Mesin Sekarang
            </a>
          </div>

          <!-- Trust badges -->
          <div class="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-blue-300">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Seller Terverifikasi
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Transaksi Aman
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Gratis Mendaftar
            </span>
          </div>
        </div>

        <!-- Illustration -->
        <div class="flex justify-center">
          <div class="relative w-full max-w-lg">
            <!-- Decorative rings -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-80 h-80 border border-white/10 rounded-full animate-spin" style="animation-duration: 20s;"></div>
              <div class="absolute w-60 h-60 border border-orange-400/20 rounded-full animate-spin" style="animation-duration: 15s; animation-direction: reverse;"></div>
            </div>

            <!-- Central gear SVG illustration -->
            <div class="relative flex items-center justify-center h-80">
              <svg viewBox="0 0 200 200" class="w-72 h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Outer gear -->
                <circle cx="100" cy="100" r="70" stroke="#F97316" stroke-width="3" stroke-dasharray="8 4" opacity="0.4"/>
                <!-- Main gear body -->
                <path d="M100 40 L108 55 L124 48 L126 64 L142 64 L138 80 L152 88 L144 102 L155 115 L143 124 L148 140 L132 143 L130 159 L114 156 L108 170 L94 165 L86 178 L74 168 L60 176 L54 162 L38 163 L40 147 L26 141 L32 126 L20 115 L30 103 L22 90 L37 82 L35 66 L51 64 L53 48 L68 52 L75 38 L88 44 Z" fill="#1E3A8A" stroke="#F97316" stroke-width="2"/>
                <!-- Inner circle -->
                <circle cx="100" cy="107" r="28" fill="#0F2460" stroke="#F97316" stroke-width="2.5"/>
                <!-- Gear teeth simplified -->
                <circle cx="100" cy="107" r="14" fill="#F97316" opacity="0.9"/>
                <circle cx="100" cy="107" r="7" fill="#1E3A8A"/>
                <!-- Connecting rods -->
                <line x1="40" y1="107" x2="72" y2="107" stroke="#F97316" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
                <line x1="128" y1="107" x2="160" y2="107" stroke="#F97316" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
                <line x1="100" y1="47" x2="100" y2="79" stroke="#F97316" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
                <line x1="100" y1="135" x2="100" y2="167" stroke="#F97316" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
              </svg>

              <!-- Floating stat cards around the illustration -->
              <div class="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 text-left">
                <div class="text-xs text-gray-500">Mesin Terjual</div>
                <div class="text-xl font-bold text-blue-900">10K+</div>
              </div>
              <div class="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 text-left">
                <div class="text-xs text-gray-500">Seller Aktif</div>
                <div class="text-xl font-bold text-orange-500">5K+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave bottom -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white"/>
      </svg>
    </div>
  </section>
</template>

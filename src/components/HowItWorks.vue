<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Cari Mesin',
    desc: 'Gunakan fitur pencarian atau jelajahi kategori untuk menemukan mesin yang Anda butuhkan dari ribuan listing.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Hubungi Penjual',
    desc: 'Hubungi seller langsung melalui platform kami. Tanyakan kondisi mesin, kelengkapan dokumen, dan detail teknis.',
    icon: '💬',
  },
  {
    number: '03',
    title: 'Negosiasi Harga',
    desc: 'Lakukan negosiasi harga secara transparan. Tim CS kami siap memfasilitasi jika diperlukan mediasi.',
    icon: '🤝',
  },
  {
    number: '04',
    title: 'Transaksi Selesai',
    desc: 'Proses pembayaran aman melalui escrow. Mesin dikirim dan Anda menerima sesuai kesepakatan.',
    icon: '✅',
  },
]
</script>

<template>
  <section id="cara-kerja" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="text-orange-500 font-semibold text-sm uppercase tracking-widest">Mudah & Cepat</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-blue-900">Cara Kerja</h2>
        <p class="mt-3 text-gray-500 max-w-xl mx-auto">
          Proses jual beli mesin yang transparan, aman, dan efisien dalam 4 langkah mudah.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Connector line (desktop) -->
        <div class="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-orange-300 to-blue-200"></div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            class="relative flex flex-col items-center text-center group"
          >
            <!-- Step icon circle -->
            <div class="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center mb-6 bg-blue-900 group-hover:bg-orange-500 transition-colors duration-300 shadow-lg shadow-blue-900/30">
              <span class="text-3xl">{{ step.icon }}</span>
              <span class="text-xs text-blue-200 group-hover:text-white font-bold mt-0.5">{{ step.number }}</span>
            </div>

            <!-- Arrow (mobile) -->
            <div v-if="index < steps.length - 1" class="lg:hidden absolute top-12 right-0 translate-x-1/2 z-20">
            </div>

            <h3 class="text-lg font-bold text-blue-900 mb-3">{{ step.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed max-w-xs">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-14">
        <a
          href="#"
          class="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-md"
        >
          Mulai Sekarang
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

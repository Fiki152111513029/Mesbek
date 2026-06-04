<script setup lang="ts">
import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  TagIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/vue/24/outline'
import { markRaw } from 'vue'

const features = [
  {
    icon: markRaw(CheckBadgeIcon),
    title: 'Seller Terverifikasi',
    desc: 'Setiap seller melalui proses verifikasi ketat. Identitas, legalitas usaha, dan rekam jejak transaksi kami periksa sebelum bisa berjualan.',
    color: 'bg-blue-100 text-blue-700',
    accent: 'border-blue-500',
  },
  {
    icon: markRaw(ShieldCheckIcon),
    title: 'Transaksi Aman',
    desc: 'Sistem escrow kami memastikan uang Anda aman. Pembayaran baru diteruskan ke seller setelah mesin diterima dan diinspeksi.',
    color: 'bg-green-100 text-green-700',
    accent: 'border-green-500',
  },
  {
    icon: markRaw(TagIcon),
    title: 'Harga Kompetitif',
    desc: 'Bandingkan ribuan listing dan temukan harga terbaik. Fitur negosiasi langsung membantu Anda mendapatkan deal terbaik.',
    color: 'bg-orange-100 text-orange-700',
    accent: 'border-orange-500',
  },
  {
    icon: markRaw(ChatBubbleLeftRightIcon),
    title: 'Dukungan Customer Service',
    desc: 'Tim CS kami siap membantu 7 hari seminggu. Dari pencarian mesin hingga proses pengiriman, kami dampingi setiap langkah.',
    color: 'bg-purple-100 text-purple-700',
    accent: 'border-purple-500',
  },
]
</script>

<template>
  <section id="tentang-kami" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-14">
        <span class="text-orange-500 font-semibold text-sm uppercase tracking-widest">Keunggulan Kami</span>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-blue-900">Mengapa Memilih Kami?</h2>
        <p class="mt-3 text-gray-500 max-w-xl mx-auto">
          Kami hadir dengan solusi lengkap untuk kebutuhan jual beli mesin bekas industri Anda.
        </p>
      </div>

      <!-- Feature cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="feat in features"
          :key="feat.title"
          :class="[
            'bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4',
            feat.accent,
          ]"
        >
          <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-5', feat.color]">
            <component :is="feat.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-blue-900 text-base mb-3">{{ feat.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ feat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

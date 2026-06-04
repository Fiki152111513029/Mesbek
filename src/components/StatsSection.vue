<script setup lang="ts">
const stats = [
  { value: '10.000+', label: 'Mesin Terjual', icon: '🏭' },
  { value: '5.000+', label: 'Seller Terpercaya', icon: '🤝' },
  { value: '34', label: 'Provinsi', icon: '🗺️' },
  { value: '98%', label: 'Kepuasan Pelanggan', icon: '⭐' },
]
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="group relative bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Accent bar -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-500 rounded-b-full"></div>

          <div class="text-4xl mb-3">{{ stat.icon }}</div>
          <div class="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-1">{{ stat.value }}</div>
          <div class="text-gray-500 text-sm font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

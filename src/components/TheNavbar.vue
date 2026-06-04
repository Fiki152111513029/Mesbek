<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const menuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Kategori', href: '#kategori' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-blue-900 shadow-lg'
        : 'bg-blue-900/95 backdrop-blur-sm',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#beranda" class="flex items-center gap-2 flex-shrink-0">
          <div class="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
          <span class="text-white font-bold text-lg">
            MesinBekas<span class="text-orange-400">.id</span>
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="text-blue-100 hover:text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="#"
            class="text-blue-100 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Login
          </a>
          <a
            href="#"
            class="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-md"
          >
            Jual Mesin
          </a>
        </div>

        <!-- Mobile toggle -->
        <button
          class="lg:hidden text-white p-2 rounded-md"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <XMarkIcon v-if="menuOpen" class="w-6 h-6" />
          <Bars3Icon v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="lg:hidden bg-blue-900 border-t border-blue-800 px-4 py-3 space-y-1">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="block text-blue-100 hover:text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
        <div class="pt-3 border-t border-blue-800 flex flex-col gap-2">
          <a href="#" class="text-blue-100 hover:text-white text-sm font-medium px-3 py-2">Login</a>
          <a
            href="#"
            class="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
          >
            Jual Mesin Sekarang
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

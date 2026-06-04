<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import CategorySection from '@/components/CategorySection.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import TestimoniSection from '@/components/TestimoniSection.vue'
import CallToAction from '@/components/CallToAction.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="font-sans antialiased text-gray-900">
    <TheNavbar />
    <main>
      <HeroSection />
      <StatsSection />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
      <HowItWorks />
      <TestimoniSection />
      <CallToAction />
    </main>
    <TheFooter />
  </div>
</template>

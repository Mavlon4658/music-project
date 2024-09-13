<template>
  <div class="w-full overflow-x-hidden font-manrope font-semibold text-[#101010]">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

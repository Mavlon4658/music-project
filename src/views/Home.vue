<script>

export default {
  name: 'Home',
  data () {
    return {
      list: [
        {title: "DRUMLINE [prod. Lord …", name: "MulaManDam"},
        {title: "R2R MOE - 9 LIVES", name: "R2R MOE"},
        {title: "Torn", name: "Lund"},
        {title: "Invoice (feat. Rylo Rod...", name: "NoCap"},
        {title: "BACKBONE", name: "Chase & Status, Stormzy"},
        {title: "2 Slippery (feat. Boss...", name: "Luh Tyler"},
        {title: "It’s Up", name: "Drake, Young Thug, 21 Sav..."},
        {title: "Invoice (feat. Rylo Rod…", name: "NoCap"},
        {title: "Sorry Not Sorry", name: "Lil Yachty, Veeze"},
        {title: "VENUS", name: "DC The Don"},
        {title: "Hate Me", name: "Lil Yachty, ian"},
        {title: "Hit Stick", name: "Kodak Black"},
      ]
    }
  }
}
</script>

<template>
  <div class="home font-bold pt-[96px] lg:pt-[204px] pb-[136px] lg:pb-[164px] relative z-[1]">
    <img src="@/assets/images/home-bg.png" alt="" class="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-[-1]">
    <img src="@/assets/images/home-bg-sm.png" alt="" class="md:hidden absolute top-0 left-0 w-full h-full object-cover z-[-1]">
    <div class="container">
      <div class="relative mb-10 lg:mb-20">
        <input type="text" placeholder="Поиск" class="w-full h-[51px] lg:h-[80px] outline-none bg-white rounded-lg text-sm lg:text-lg text-[#101010] placeholder:text-[#101010] pl-7 pr-[80px]">
        <button class="absolute top-1/2 right-7 translate-y-[-50%]">
          <img :src="this.$getImage('search.svg')" alt="" class="w-4 lg:w-auto">
        </button>
      </div>
      <div>
        <h2 class="text-xl lg:text-[38px] font-bold leading-7 lg:leading-[52px] mb-10">Популярное</h2>
        <ul class="flex flex-wrap items-stretch gap-x-3 sm:gap-x-5 gap-y-[18px] sm:gap-y-10">
          <li 
            v-for="(card, i) in list"
            :key="i"
            class="w-[calc(50%_-_6px)] sm:w-[calc(100%_/_3_-_40px_/_3)] md:w-[calc(100%_/_4_-_60px_/_4)] lg:w-[calc(100%_/_6_-_100px_/_6)] music-card"
          >
            <div class="h-[162px] sm:h-[214px] mb-[15px] sm:mb-5 relative rounded-lg overflow-hidden w-full">
              <img :src="this.$getImage(`music-card-${i+1}.png`)" class="w-full h-full object-cover" alt="">
              <div class="absolute top-2 left-2 flex items-center gap-[3px]">
                <button>
                  <img :src="this.$getImage('card-icon-1.svg')" alt="">
                </button>
                <button>
                  <img :src="this.$getImage('card-icon-2.svg')" alt="">
                </button>
                <button>
                  <img :src="this.$getImage('card-icon-3.svg')" alt="">
                </button>
              </div>
              <button class="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 hidden play-btn">
                <img :src="this.$getImage('card-play-icon.svg')" alt="">
              </button>
            </div>
            <h3 class="mb-[2px] text-xs sm:text-lg sm:leading-[25px] truncate">{{ card.title }}</h3>
            <p class="text-[#797979] font-normal text-[10px] sm:text-base leading-[14px] sm:leading-[22px] truncate">{{ card.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full bg-[#101010] text-white pt-4 pb-[60px] lg:pt-5 lg:pb-5">
      <div class="container flex items-center justify-between lg:gap-[38px]">
        <div class="flex items-center gap-7 flex-shrink-0">
          <div class="absolute lg:static left-1/2 -translate-x-2/4 lg:translate-x-0 top-[51px] flex items-center gap-[14px]">
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('prev.svg')" alt="" class="w-[18px] lg:w-auto">
            </button>
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('play.svg')" alt="" class="w-[18px] lg:w-auto">
            </button>
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('next.svg')" alt="" class="w-[18px] lg:w-auto">
            </button>
          </div>
          <div class="absolute lg:static right-5 top-[51px] flex items-center gap-[14px]">
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('shuffle.svg')" alt="" class="w-[18px] lg:w-auto">
            </button>
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('repeat.svg')" alt="" class="w-[18px] lg:w-auto">
            </button>
          </div>
        </div>
        <div class="w-full flex items-center gap-[9px] lg:gap-[22px]">
          <p class="text-[10px] lg:text-base leading-[14px] lg:leading-[22px] flex-shrink-0">01:33</p>
          <div class="h-[1px] lg:h-[2px] w-full bg-[rgba(255,255,255,66%)]">
            <div class="flex items-center justify-end h-[1px] lg:h-[2px] bg-[#EF5408] rounded-[0_5px_5px_0]" :style="{width: '40%'}">
              <div class="w-[5px] lg:w-3 h-[5px] lg:h-3 rounded-full bg-[#EF5408]"></div>
            </div>
          </div>
          <p class="text-[10px] lg:text-base leading-[14px] lg:leading-[22px] flex-shrink-0">03:48</p>
        </div>
        <div class="absolute lg:static left-5 top-[46px] flex items-center gap-2 lg:gap-3 flex-shrink-0">
          <img :src="this.$getImage('music-card-2.png')" alt="" class="w-[26px] lg:w-[43px] h-[26px] lg:h-[43px] object-cover rounded">
          <div class="w-[52px] lg:w-auto">
            <h3 class="text-[10px] lg:text-base leading-[14px] lg:leading-[22px] lg:mb-[2px] truncate">R2R MOE - 9 LIVES</h3>
            <p class="font-normal text-[10px] lg:text-sm leading-[14px] lg:leading-[19px] opacity-[0.66] truncate">R2R MOE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.music-card:hover .play-btn {
  @apply block
}
</style>
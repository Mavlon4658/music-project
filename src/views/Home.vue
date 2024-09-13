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
  <div class="home font-bold pt-[204px] pb-[164px] relative z-[1]">
    <img src="@/assets/images/home-bg.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
    <div class="container">
      <div class="relative mb-20">
        <input type="text" placeholder="Поиск" class="w-full h-[80px] outline-none bg-white rounded-lg text-lg text-[#101010] placeholder:text-[#101010] pl-7 pr-[80px]">
        <button class="absolute top-1/2 right-7 translate-y-[-50%]">
          <img :src="this.$getImage('search.svg')" alt="">
        </button>
      </div>
      <div>
        <h2 class="text-[38px] font-bold leading-[52px] mb-10">Популярное</h2>
        <ul class="flex flex-wrap items-stretch gap-x-5 gap-y-10">
          <li 
            v-for="(card, i) in list"
            :key="i"
            class="w-[calc(100%_/_6_-_100px_/_6)] music-card"
          >
            <div class="h-[214px] mb-5 relative rounded-lg overflow-hidden">
              <img :src="this.$getImage(`music-card-${i+1}.png`)" class="w-full h-full" alt="">
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
            <h3 class="mb-[2px] text-lg leading-[25px] truncate">{{ card.title }}</h3>
            <p class="text-[#797979] font-normal text-base leading-[22px] truncate">{{ card.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full bg-[#101010] text-white py-5">
      <div class="container flex items-center justify-between gap-[38px]">
        <div class="flex items-center gap-7 flex-shrink-0">
          <div class="flex items-center gap-[14px]">
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('prev.svg')" alt="">
            </button>
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('play.svg')" alt="">
            </button>
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('next.svg')" alt="">
            </button>
          </div>
          <div class="flex items-center gap-[14px]">
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('shuffle.svg')" alt="">
            </button>
            <button class="flex items-center justify-center w-6 h-6 flex-shrink-0">
              <img :src="this.$getImage('repeat.svg')" alt="">
            </button>
          </div>
        </div>
        <div class="w-full flex items-center gap-[22px]">
          <p class="text-base leading-[22px] flex-shrink-0">01:33</p>
          <div class="h-[2px] w-full bg-[rgba(255,255,255,66%)]">
            <div class="flex items-center justify-end h-[2px] bg-[#EF5408]" :style="{width: '40%'}">
              <div class="w-3 h-3 rounded-full bg-[#EF5408]"></div>
            </div>
          </div>
          <p class="text-base leading-[22px] flex-shrink-0">03:48</p>
        </div>
        <div class="flex items-center gap-3 flex-shrink-0">
          <img :src="this.$getImage('music-card-2.png')" alt="" class="w-[43px] h-[43px] object-cover rounded">
          <div>
            <h3 class="text-base leading-[22px] mb-[2px]">R2R MOE - 9 LIVES</h3>
            <p class="font-normal text-sm leading-[19px] opacity-[0.66]">R2R MOE</p>
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
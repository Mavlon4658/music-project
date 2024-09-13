<script>
export default {
    name: "Header",
    data () {
        return {
            menu: false,
        }
    }
}
</script>

<template>
    <header class="fixed left-0 top-0 w-full z-[2] bg-white py-4 lg:pt-[37px] lg:pb-[38px] shadow-[4px_4px_44px_rgba(0,0,0,1.5%)]">
        <div class="container flex items-center justify-between">
            <router-link to="/">
                <img src="@/assets/images/logo.svg" alt="" class="h-6 lg:h-auto">
            </router-link>
            <ul class="hidden lg:flex items-center gap-[60px] text-lg leading-[25px]">
                <li>
                    <router-link to="/">Главная</router-link>
                </li>
                <li>
                    <router-link to="/about-licenses">О лицензиях</router-link>
                </li>
                <li>
                    <router-link to="/">О проекте</router-link>
                </li>
            </ul>
            <div class="hidden lg:flex items-center gap-7">
                <div class="flex items-center gap-3">
                    <a href="#" class="flex items-center justify-center w-[34px] h-[34px]">
                        <img src="@/assets/images/instagram.svg" alt="">
                    </a>
                    <a href="#" class="flex items-center justify-center w-[34px] h-[34px]">
                        <img src="@/assets/images/telegram.svg" alt="">
                    </a>
                </div>
                <div class="flex items-center gap-3">
                    <router-link to="#" class="btn-dark">
                        <span>Sign in</span>
                        <img src="@/assets/images/arrow-right.svg" alt="">
                    </router-link>
                    <router-link to="#" class="btn-orange">
                        <span>Create account</span>
                    </router-link>
                </div>
            </div>
            <button @click="menu = true" class="lg:hidden">
                <img :src="this.$getImage('bars.svg')" alt="">
            </button>
        </div>
    </header>
    <div v-if="menu" class="fixed top-0 left-0 w-full h-full z-10">
        <div class="absolute left-0 top-0 w-full h-full bg-[#121212] opacity-[0.6]"></div>
        <div class="absolute right-0 top-0 w-[260px] h-full bg-white p-5">
            <button @click="menu = false" class="mb-9">
                <img :src="this.$getImage('times.svg')" alt="">
            </button>
            <ul class="flex flex-col items-start gap-[18px] text-sm leading-[19px] mb-9">
                <li>
                    <router-link to="/" @click="menu = false">Главная</router-link>
                </li>
                <li>
                    <router-link to="/about-licenses" @click="menu = false">О лицензиях</router-link>
                </li>
                <li>
                    <router-link to="/" @click="menu = false">О проекте</router-link>
                </li>
            </ul>
            <div class="flex flex-col items-start gap-9">
                <div class="flex items-center gap-2">
                    <a href="#" class="flex items-center justify-center w-[34px] h-[34px]">
                        <img src="@/assets/images/instagram.svg" alt="">
                    </a>
                    <a href="#" class="flex items-center justify-center w-[34px] h-[34px]">
                        <img src="@/assets/images/telegram.svg" alt="">
                    </a>
                </div>
                <div class="flex flex-col items-center gap-[10px] w-full">
                    <router-link to="#" class="btn-dark w-full">
                        <span>Sign in</span>
                        <img src="@/assets/images/arrow-right.svg" alt="">
                    </router-link>
                    <router-link to="#" class="btn-orange w-full">
                        <span>Create account</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
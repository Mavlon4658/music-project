<script>
export default {

}
</script>

<template>
    <header class="fixed left-0 top-0 w-full z-[2] bg-white pt-[37px] pb-[38px] shadow-[4px_4px_44px_rgba(0,0,0,1.5%)]">
        <div class="container flex items-center justify-between">
            <router-link to="/">
                <img src="@/assets/images/logo.svg" alt="">
            </router-link>
            <ul class="flex items-center gap-[60px] text-lg leading-[25px]">
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
            <div class="flex items-center gap-7">
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
        </div>
    </header>
</template>
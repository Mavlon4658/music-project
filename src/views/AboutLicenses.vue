<script>
export default {

}
</script>

<template>
    <div class="pt-[166px] pb-[106px] relative z-[1]">
        <img :src="this.$getImage('licenses-page-bg.png')" alt="" class="absolute left-0 top-0 w-full h-full z-[-1] object-cover">
        <div class="container">
            <div class="flex items-center flex-wrap gap-[11px] text-[#121212] font-medium text-sm leading-5 mb-12">
                <router-link to="/" class="opacity-[0.54]">Главная</router-link>
                <span class="opacity-[0.54]">/</span>
                <span>О лицензиях</span>
            </div>
            <h2 class="text-[38px] font-bold leading-[52px] mb-[22px]">О лицензиях Creative Commons</h2>
            <div class="mx-11 mb-12 text-lg font-medium flex items-stretch gap-[18px]">
                <div class="w-1 flex-shrink-0 bg-[#EF5408] rounded-full"></div>
                <p class="w-full">
                    Лицензии Creative Commons предоставляют каждому, от отдельных создателей до крупных учреждений, стандартизированный способ предоставления общественности разрешения на использование их творческих работ в соответствии с законом об авторском праве. <br> С точки зрения повторного пользователя, наличие лицензии Creative Commons на защищенной авторским правом работе отвечает на вопрос: что я могу сделать с этой работой?
                </p>
            </div>
            <div class="flex flex-col gap-12">
                <div>
                    <h3 class="text-[28px] leading-[38px] mb-[22px]">Параметры лицензии CC</h3>
                    <p class="text-lg leading-[25px] font-medium">Существует шесть различных типов лицензий, перечисленных от наиболее до наименее разрешительных здесь:</p>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <div class="flex items-center justify-start gap-[10px]">
                        <a href="#" class="btn-orange">Копия ПО</a>
                        <a href="#" class="btn-light">
                            <img :src="this.$getImage('copy-icon-1.svg')" alt="">
                        </a>
                    </div>
                    <p class="text-lg leading-[25px] font-medium">Эта лицензия позволяет пользователям распространять, ремиксировать, адаптировать и создавать материалы в любом носителе или формате, при сих тех пор, пока авторство предоставлено создателю. Лицензия позволяет использовать в коммерческих целях. CC BY включает следующие элементы:</p>
                    <ul class="flex flex-col gap-[14px] bg-white border border-[#E6E6E6] rounded-lg p-[14px]">
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-1.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">BY: кредит должен быть предоставлен создателю.</p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <div class="flex items-center justify-start gap-[10px]">
                        <a href="#" class="btn-orange">CC BY-SA</a>
                        <a href="#" class="btn-light">
                            <img :src="this.$getImage('copy-icon-2.svg')" alt="">
                        </a>
                    </div>
                    <p class="text-lg leading-[25px] font-medium">Эта лицензия позволяет пользователям распространять, ремиксировать, адаптировать и создавать материалы в любом носителе или формате, при сих тех пор, пока авторство предоставлено создателю. Лицензия позволяет использовать в коммерческих целях. Если вы ремиксируете, адаптируете или строите на материале, вы должны лицензировать модифицированный материал на идентичных условиях. CC BY-SA включает в себя следующие элементы:</p>
                    <ul class="flex flex-col gap-[14px] bg-white border border-[#E6E6E6] rounded-lg p-[14px]">
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-1.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">BY: кредит должен быть предоставлен создателю.</p>
                        </li>
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-2.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">SA: Адаптации должны быть общими на тех же условиях.</p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <div class="flex items-center justify-start gap-[10px]">
                        <a href="#" class="btn-orange">CC BY-NC</a>
                        <a href="#" class="btn-light">
                            <img :src="this.$getImage('copy-icon-3.svg')" alt="">
                        </a>
                    </div>
                    <p class="text-lg leading-[25px] font-medium">Эта лицензия позволяет пользователям распространять, ремиксировать, адаптировать и создавать материалы на любом носителе или формате только в некоммерческих целях, и только до тех пор, пока авторство предоставлено создателю. CC BY-NC включает следующие элементы:</p>
                    <ul class="flex flex-col gap-[14px] bg-white border border-[#E6E6E6] rounded-lg p-[14px]">
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-1.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">BY: кредит должен быть предоставлен создателю.</p>
                        </li>
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-3.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">NC: Допускается только некоммерческое использование работы.</p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <div class="flex items-center justify-start gap-[10px]">
                        <a href="#" class="btn-orange">CC BY-NC-SA</a>
                        <a href="#" class="btn-light">
                            <img :src="this.$getImage('copy-icon-4.svg')" alt="">
                        </a>
                    </div>
                    <p class="text-lg leading-[25px] font-medium">Эта лицензия позволяет пользователям распространять, ремиксировать, адаптировать и создавать материалы на любом носителе или формате только в некоммерческих целях, и только до тех пор, пока авторство предоставлено создателю. Если вы ремиксируете, адаптируете или строите на материале, вы должны лицензировать модифицированный материал на идентичных условиях. CC BY-NC-SA включает следующие элементы:</p>
                    <ul class="flex flex-col gap-[14px] bg-white border border-[#E6E6E6] rounded-lg p-[14px]">
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-1.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">BY: кредит должен быть предоставлен создателю.</p>
                        </li>
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-3.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">NC: Допускается только некоммерческое использование работы.</p>
                        </li>
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-4.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">SA: Адаптации должны быть общими на тех же условиях.</p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <div class="flex items-center justify-start gap-[10px]">
                        <a href="#" class="btn-orange">CC BY-ND</a>
                        <a href="#" class="btn-light">
                            <img :src="this.$getImage('copy-icon-5.svg')" alt="">
                        </a>
                    </div>
                    <p class="text-lg leading-[25px] font-medium">Эта лицензия позволяет повторным пользователям копировать и распространять материал на любом носителе или в формате только в неадаптированной форме, и только при тех пор, пока авторство предоставлено создателю. Лицензия позволяет использовать в коммерческих целях. CC BY-ND включает следующие элементы:</p>
                    <ul class="flex flex-col gap-[14px] bg-white border border-[#E6E6E6] rounded-lg p-[14px]">
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-1.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">BY: кредит должен быть предоставлен создателю.</p>
                        </li>
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-5.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">ND: Производные или адаптации работы не допускаются.</p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <div class="flex items-center justify-start gap-[10px]">
                        <a href="#" class="btn-orange">CC BY-NC-ND</a>
                        <a href="#" class="btn-light">
                            <img :src="this.$getImage('copy-icon-6.svg')" alt="">
                        </a>
                    </div>
                    <p class="text-lg leading-[25px] font-medium">Эта лицензия позволяет повторным пользователям копировать и распространять материал на любом носителе или в формате только в неадаптированной форме, только в некоммерческих целях и только при том случае, если авторство предоставлено создателю. CC BY-NC-ND включает следующие элементы:</p>
                    <ul class="flex flex-col gap-[14px] bg-white border border-[#E6E6E6] rounded-lg p-[14px]">
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-1.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">BY: кредит должен быть предоставлен создателю.</p>
                        </li>
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-3.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">NC: Допускается только некоммерческое использование работы.</p>
                        </li>
                        <li class="flex items-center gap-[14px]">
                            <img :src="this.$getImage('icon-5.svg')" alt="" class="flex-shrink-0">
                            <p class="text-lg leading-[25px] font-bold">ND: Производные или адаптации работы не допускаются.</p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <div class="flex items-center justify-start gap-[10px]">
                        <h3 class="text-[28px] leading-[38px]">Посвящение Общественного Достояния CC0</h3>
                        <a href="#" class="btn-light">
                            <img :src="this.$getImage('copy-icon-7.svg')" alt="">
                        </a>
                    </div>
                    <p class="text-lg leading-[25px] font-medium">CC0 (он же CC Zero) - это инструмент публичного посвящения, который позволяет создателям отказаться от своих авторских прав и выложить свои работы в общественное достояние во всем мире. CC0 позволяет повторным пользователям распространять, ремиксировать, адаптировать и создавать материал в любом носителе или формате без каких-либо условий.</p>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <h3 class="text-[28px] leading-[38px]">Выбор лицензии</h3>
                    <p class="text-lg leading-[25px] font-medium">Шесть лицензий и инструмент публичного достояния дают создателям ряд вариантов. Лучший способ решить, что подходит для вас, - это подумать о том, почему вы хотите поделиться своей работой, и как вы надеетесь, что другие будут использовать эту работу.</p>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <h3 class="text-[28px] leading-[38px]">Перед лицензированием</h3>
                    <p class="text-lg leading-[25px] font-medium">Прежде чем применить лицензию CC или CC0 к своей работе, есть несколько важных вещей, которые следует учитывать:</p>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <h3 class="text-xl leading-[27px] text-[#EF5408]">Лицензии и CC0 не могут быть отозваны.</h3>
                    <p class="text-lg leading-[25px] font-medium">Это означает, что после того, как вы применяете лицензию CC к своему материалу, любой, кто ее получает, может полагаться на эту лицензию до тех пор, пока материал защищен авторским правом, даже если вы позже прекратите его распространение.</p>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <h3 class="text-xl leading-[27px] text-[#EF5408]">Вы должны владеть или контролировать авторские права на работу.</h3>
                    <p class="text-lg leading-[25px] font-medium">Только владелец авторских прав или кто-то с явным разрешением правообладателя может применять лицензию CC или CC0 к произведению, защищенному авторским правом. Если вы создали работу в рамках своей работы, вы не можете быть владельцем авторских прав.</p>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <h3 class="text-[28px] leading-[38px]">Как применить лицензию CC или CC0 к вашей работе</h3>
                    <p class="text-lg leading-[25px] font-medium">CC-лицензирование вашей работы просто. Все, что вам нужно сделать, это выбрать лицензию CC, которая соответствует вашим потребностям, а затем сообщить об этом выборе таким образом, чтобы людям, которые сталкиваются с вашей работой, было понятно. В рамках этого сообщения вы должны включить ссылку на выбранную вами лицензию. <br> Это может быть так же просто, как небольшой текст, в котором говорится и ссылается на лицензию в уведомлении об авторских правах, например: <br> © 2019. Эта работа имеет открытую лицензию через CC BY 4.0.</p>
                </div>
            </div>
        </div>
    </div>
</template>
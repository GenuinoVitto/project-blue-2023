<template>
    <div id="app">
        <div class="snap-y snap-mandatory">
            <!-- Hero -->
            <section class="flex flex-col bg-center bg-cover bg-blend-overlay bg-black/40 bg-fixed bg-[url('~/assets/img/hero-1.jpg')] h-screen">
                <div class="flex-1 items-center">
                    <!-- Hero 1 -->
                    <div class="text-center mx-auto">
                        <h1 class="text-8xl font-semibold text-white">Project Blue</h1>
                        <br>
                        <hr>
                        <h3 class="font-light text-3xl mt-2 text-white">more than just cleanups...</h3>
                    </div> 
                </div>
            </section>
            
            <div class="spacer bg-[url('~/assets/img/layer-1.svg')]"></div>
            <!-- Who we are -->
            <section id="introduction">
                <h2>What is Project Blue?</h2>
                <p>
                    Project Blue (PB) is a youth-led nonprofit organization that focuses on raising awareness and providing sustainable solutions on ocean pollution and marine conservation. It started as a cleanup idea that turned into an organization after the realization that cleanups aren't enough and that we have to be more sustainable. We do a mix of physical and online projects that advocate for the oceans. It was founded in the province of Ilocos last December 2020.
                </p>
            </section>
            <div class="spacer bg-[url('~/assets/img/layer-2.svg')]"></div>
            
            <v-carousel 
                cycle
                hide-delimiters
                :show-arrows="false"    
            >
                <v-carousel-item 
                    v-for="(item,i) in items" 
                    :key="i"
                    :src="item.img"
                    cover
                    ></v-carousel-item>
            </v-carousel>

            <div class="spacer bg-[url('~/assets/img/layer-1.svg')]"></div>
            <!-- Mission -->
            <section id="mission">
                <img class="items-left" src="~/assets/img/pb-logo.jpg" alt="template">
                <h3>Mission</h3>
                <p>
                    To preserve the beaches of the Philippines by designing sustainable solutions and providing educational campaigns to raise awareness and knowledge on ocean pollution and marine conservation.
                </p>
            </section>
            <div class="spacer bg-[url('~/assets/img/layer-2.svg')]"></div>

            <div class="spacer bg-[url('~/assets/img/layer-1.svg')]"></div>
            <!-- Vision -->
            <section id="vision">
                <h3>Vision</h3>
                <p>
                    To inspire others to take action and have a community that appreciates, respects, and is aware of the environment's problems.
                </p>
            </section>
            <div class="spacer bg-[url('~/assets/img/layer-2.svg')]"></div>
        </div>
    </div>
</template>

<script>

import img1 from '~/assets/img/hero-1.jpg'
import img2 from '~/assets/img/hero-2.jpg'
import img3 from '~/assets/img/hero-3.jpg'

export default {
    data(){
        return {
            items: [
                {
                    img: img1,
                },
                {
                    img: img2,
                },
                {
                    img: img3,
                },
            ]
        }
    }
}
</script>

<style lang="postcss" scoped>

section {
    @apply relative flex flex-col items-center min-h-screen p-60 font-Quicksand;
}

#introduction {
    @apply bg-[#79a2b0] text-white text-xl;
}

#mission {
    @apply bg-[#79a2b0] text-white text-xl;
}

#vision {
    @apply bg-[#79a2b0] text-white text-xl;
}

.spacer {
    aspect-ratio: 960/300;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

</style>
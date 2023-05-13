<template>
    <div id="app">
        <div>
            <!-- Hero -->
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

            <!-- Who we are -->
            <section id="introduction">
                <h2>What is Project Blue?</h2>
                <p>
                    Project Blue (PB) is a youth-led nonprofit organization that focuses on raising awareness and providing sustainable solutions on ocean pollution and marine conservation. It started as a cleanup idea that turned into an organization after the realization that cleanups aren’t enough and that we have to be more sustainable. We do a mix of physical and online projects that advocate for the oceans. It was founded in the province of Ilocos last December 2020.
                </p>
            </section>


            <!-- Mission -->
            <section id="mission">
                <h3>Mission</h3>
                <p>
                    To preserve the beaches of the Philippines by designing sustainable solutions and providing educational campaigns to raise awareness and knowledge on ocean pollution and marine conservation.
                </p>
            </section>
            <!-- Vision -->
            <section id="vision">
                <h3>Vision</h3>
                <p>
                    To inspire others to take action and have a community that appreciates, respects, and is aware of the environment's problems.
                </p>
            </section>
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
    @apply bg-[#bbe1fb] text-[#163b74] text-xl;
}

#mission {
    @apply bg-[#3382b8] text-[#d8dee7] text-xl;
}

#vision {
    @apply bg-[#0f4c75] text-[#d8dee7] text-xl;
}


</style>
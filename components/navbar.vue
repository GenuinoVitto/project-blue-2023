<template>
    <nav>
        <div id="logo">
            <img src="~/assets/img/pb-logo.jpg"/>
        </div>
        <ul id="nav-links">
            <li><NuxtLink class="nav-btn" to="/">Home</NuxtLink></li>
            <li>
                <NuxtLink class="nav-btn" to="/about/feature">About Us</NuxtLink>
            </li>
            <li>
                <!-- dropdown -->
                <NuxtLink class="nav-btn" to="/portfolio/boat">Our Projects</NuxtLink>
            </li>
            <li><NuxtLink class="nav-btn" to="/contact">Contact Us</NuxtLink></li>
        </ul> 
    </nav>

    <!-- reponsive nav bar -->
    <!-- <v-app-bar>
        <v-app-bar-nav-icon>
        </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
            v-model="drawer"
            location="bottom"
            temporary>
    </v-navigation-drawer> -->

</template>

<script setup>

</script>

<style lang="postcss" scoped>

nav {
    @apply flex justify-around items-center min-h-[8vh] bg-[#ffffff] font-Quicksand;
}

img {
    @apply w-auto h-8
}

#nav-links {
    @apply flex w-1/3 justify-around;
}

.nav-btn {
    @apply transition duration-300 hover:text-[#3382b8] hover:ease-in-out;
}

</style>
<template>
    <div id="navbar">
        <img id="logo" src="~/assets/img/pb-logo.jpg"/>
        <NuxtLink class="nav-btn" to="/">Home</NuxtLink>
        <NuxtLink class="nav-btn" to="/about">About Us</NuxtLink>
        <NuxtLink class="nav-btn" to="/portfolio">Our Projects</NuxtLink>
        <NuxtLink class="nav-btn" to="/contact">Contact Us</NuxtLink>
        <NuxtLink class="nav-btn" to="/shop">Shop</NuxtLink>
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>

#logo{
    @apply w-auto h-10
}

#navbar {
    @apply flex text-[#0f4c75] bg-white w-full py-0 top-28 gap-0 justify-between;
}

.nav-btn {
    @apply uppercase transition ease-in-out hover:bg-[#3382b8] hover:text-white whitespace-nowrap py-2 text-base text-center grow w-1/4 no-underline;
}

</style>
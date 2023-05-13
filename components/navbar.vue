<template>
    <div id="navbar">
        <span href="home">
            <img id="logo" src="~/assets/img/pb-logo.jpg"/>
            <NuxtLink class="mx-2" to="/">Project Blue</NuxtLink>
        </span>

        <ul>
            <li>
                <NuxtLink class="nav-btn" to="/">Home</NuxtLink>
            </li>
            <li>
                <button class="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white">dropdown</button>
                <div class="hidden peer-hover:flex hover:flex
                w-[200px]
                flex-col bg-white drop-shadow-lg">
                    <NuxtLink class="nav-btn" to="/about/feature">About Us</NuxtLink>
                </div>
            </li>
            <li>
                <NuxtLink class="nav-btn" to="/portfolio/boat">Our Projects</NuxtLink>
            </li>
            <li>
                <NuxtLink class="nav-btn" to="/contact">Contact Us</NuxtLink>
            </li>
            <li>
                <NuxtLink class="nav-btn" to="/shop">Shop</NuxtLink>
            </li>
            
            <button>
                Get Started
            </button>
        </ul>
    </div>
</template>

<script>
</script>

<style lang="postcss" scoped>

#logo{
    @apply h-10 inline;
}
span {
    @apply text-2xl cursor-pointer font-Quicksand;
}

#navbar {
    @apply p-5 bg-white shadow md:flex md:items-center md:justify-between;
}

ul {
    @apply md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500;
}
li {
    @apply mx-4 my-6 md:my-0;
}
button {
    @apply bg-[#79a2b0] text-white duration-500 px-6 py-2 mx-4 hover:bg-[#3382b8] rounded;
}
.nav-btn {
    @apply uppercase transition ease-in-out duration-500 hover:text-[#79a2b0] whitespace-nowrap py-2 text-base text-center grow w-1/4 no-underline;
}

</style>
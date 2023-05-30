<template>
    <div id="navbar">
        <span href="home">
            <img id="logo" src="~/assets/img/pb-logo.jpg"/>
            <NuxtLink class="mx-2" to="/">Project Blue</NuxtLink>
        </span>

        <ul>
            <li>
                <div>
                    <button id="dropdown" class="peer transition ease-in-out duration-500 uppercase hover:text-[#79a2b0] whitespace-nowrap text-base w-36 no-underline">
                        <NuxtLink class="nav-btn" to="/">Home</NuxtLink>
                    </button>
                </div>
                
            </li>
            <li>
                <div>
                    <button id="dropdown" class="peer transition ease-in-out duration-500 uppercase hover:text-[#79a2b0] whitespace-nowrap text-base w-36 no-underline">About Us</button>

                    <div id="dropdown-content" class="hidden peer-hover:flex hover:flex w-36 flex-col bg-white drop-shadow-lg fixed z-10 rounded-md shadow transition ease-in-out duration-500">
                        <NuxtLink class="drop-btn" to="/about/feature">Feature</NuxtLink>
                        <NuxtLink class="drop-btn" to="/about/founder">Founder</NuxtLink>
                        <NuxtLink class="drop-btn" to="/about/involve">Involve</NuxtLink>
                        <NuxtLink class="drop-btn" to="/about/organization">Organization</NuxtLink>
                    </div>

                </div>
            </li>
            <li>
                <div>
                    <button id="dropdown" class="peer transition ease-in-out duration-500 uppercase hover:text-[#79a2b0] whitespace-nowrap text-base w-36 no-underline">Our Projects</button>

                    <div id="dropdown-content" class="hidden peer-hover:flex hover:flex w-36 flex-col bg-white drop-shadow-lg fixed z-10 rounded-md shadow transition ease-in-out duration-500">
                        <NuxtLink class="drop-btn" to="/about/feature">Plastic Boat</NuxtLink>
                        <NuxtLink class="drop-btn" to="/about/founder">Clean-Ups</NuxtLink>
                        <NuxtLink class="drop-btn" to="/about/involve">Campaigns</NuxtLink>
                        <NuxtLink class="drop-btn" to="/about/organization">Biodiversity</NuxtLink>
                    </div>
                </div>
            </li>
            <button id="gs">
                <NuxtLink to="/contact">Want to help? 😊</NuxtLink>
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
    @apply p-5 bg-white shadow md:flex md:items-center md:justify-between font-bold text-xl;
}

ul {
    @apply md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500;
}
li {
    @apply mx-4 my-6 md:my-0;
}
#gs {
    @apply bg-[#79a2b0] text-white duration-500 px-6 py-2 mx-4 hover:bg-[#3382b8] rounded;
}
.nav-btn {
    @apply uppercase transition ease-in-out duration-500 hover:text-[#79a2b0] whitespace-nowrap py-2 text-base text-center grow no-underline;
}

.drop-btn {
    @apply uppercase transition ease-in-out duration-300 hover:text-white hover:bg-[#79a2b0] relative rounded-md w-36 whitespace-nowrap py-2 text-base text-center no-underline;
}

#dropdown:hover #dropdown-content {
    @apply flex transition ease-in-out duration-500;
}

</style>
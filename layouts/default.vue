<template>
    <div>
        <v-app id="page">
            <div>
                <navbar/>
                <Nuxt />
                <slot />
                <footer />
            </div>
        </v-app>
    </div>
</template>
<template>
    <div>
        <v-app id="page">
            <div>
                <navbar/>
                <Nuxt />
                <slot />
                <cool/>
            </div>
        </v-app>
    </div>
</template>
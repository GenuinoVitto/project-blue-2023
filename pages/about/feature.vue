<template>
    <div>
        <div>
            <!-- Body One -->
            <section id="bodyOne">
                <h2>Body 1</h2>
                <p>
                    Lorem
                </p>
            </section>


            <!-- Body Two -->
            <section id="bodyTwo">
                <h3>Body 2</h3>
                <p>
                    Lorem
                </p>
            </section>
            
						<!-- Body Three -->
            <section id="bodyThree">
                <h3>Body 3</h3>
                <p>
                    Lorem
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>

section {
    @apply relative flex flex-col items-center min-h-screen p-60 font-Quicksand;
}

#bodyOne {
    @apply bg-[#79a2b0] text-[#163b74] text-xl;
}

#bodyTwo {
    @apply bg-[#3382b8] text-[#d8dee7] text-xl;
}

#bodyThree {
    @apply bg-[#0f4c75] text-[#d8dee7] text-xl;
}



</style>
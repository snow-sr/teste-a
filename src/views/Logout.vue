<template>
    <div class="min-h-screen bg-slate-900">
        <h1 class="text-white">Tchau tchau!</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$cookies.remove('Token')
        this.$cookies.remove('userInfo')
        this.$router.push('/login')
    }
}
</script>
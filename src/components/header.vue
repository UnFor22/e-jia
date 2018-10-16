<template>
    <mt-header :title="title" class="header">   
        <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
</template>

<script>
    import { Header,Button } from 'mint-ui';

    export default {
        components: {
            'mt-header': Header,
            'mt-button': Button
        },
        computed: {
            title() {
                return this.$route.meta.title;
            }
        }
    }
</script>

<style lang='scss'>
    .header {
        height: 0.88rem;
        background: #c50206;
        font-size: 16px;
    }
</style>
<template>
    <div class="sign" @click="$emit('close')">
        <div class="sign-modal" @click.stop>
            <slot name="otherText"></slot>
            <div style="display:flex">
                <slot name="input"></slot>
                <slot name="submit"></slot>
                <slot name="close"></slot>
            </div>
        </div>
    </div>
</template>

<script>



export default {
    data(){
        return {
            close:false
        }
    }
}
</script>

<style scoped lang="less" src="../assets/less/sign.less">
</style>
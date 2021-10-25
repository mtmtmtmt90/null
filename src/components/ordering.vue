<template>
    <div class="container" ref="container">
        <div class="name"><img src="../assets/img/name.svg" alt=""></div>
        <div class="banner" ref="banner">
            <div class="black">
                <div class="blankToggle" @click="startFillBlank()">Registrasiya</div>
            </div>
            <div class="blank"></div>
            <div class="blank-backface"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        addEventListener('scroll',this.scrollControl)
        this.scrollControl()
    },
    methods:{
        scrollControl(){
            let wt = window.scrollY
            let wh = window.innerHeight
            let et = this.$refs.container.offsetTop
            let eh = this.$refs.container.offsetHeight
            console.log('window top =',wt)
            console.log('window height=',wh)
            console.log('element top=',et)
            console.log('element height=',eh)
            if (scrollY >= this.$refs.container.offsetTop - 50) {
                this.$refs.banner.style.left = '0px'
            } else {
                this.$refs.banner.style.left = '-630px'
            }
        },
        startFillBlank(){
            document.getElementsByClassName('black')[0].style.display = 'none'
            document.getElementsByClassName('blank')[0].classList.add('begin')
            document.getElementsByClassName('blank-backface')[0].classList.add('begin')
        },
        finishFillBlank(){
            document.getElementsByClassName('black')[0].style.display = 'inline'
            document.getElementsByClassName('blank')[0].classList.remove('begin')
            document.getElementsByClassName('blank-backface')[0].classList.remove('begin')
            document.getElementsByClassName('blank')[0].classList.add('end')
            document.getElementsByClassName('blank-backface')[0].classList.add('end')
        }
    }
}
</script>

<style lang="less" scoped src="../assets/less/ordering.less">

</style>
<template>
    <div class="container" ref="container">
        <div class="name"><img src="../assets/img/name.svg" id="post_title_image" alt=""></div>
        <div class="banner" ref="banner">
            <div class="black">
                <div class="blankToggle" @click="startFillBlank()">Registrasiya</div>
            </div>
            <div class="blank" ref="blank">
                <div class="write-place">
                    <div class="form-elem">
                        Adyňyz
                        <input type="text" style="width:100px">
                    </div>
                    <div class="form-elem">
                        Familiýaňyz
                        <input type="text" style="width:150px">
                    </div>
                    <div class="form-elem">
                        Ýüküň görnüşi
                        <input type="text" style="width:100px">
                    </div>
                    <div class="form-elem">
                        Agramy
                        <input type="number" style="width:50px">
                    </div>
                    <div class="form-address" contenteditable>
                        <span contenteditable="false">Ýüküň ýerleşýän ýeri</span>
                        Lebap wel, Türkmenabat şäh, 3nji kwartal, 53-nji jaý, 37-nji öý
                    </div>
                    <div class="form-elem">
                        Ýüküň ýetirilmeli ýeri
                        <input type="text" style="width:250px">
                    </div>
                    <div class="form-elem">
                        Öz tel.belgiňiz
                        <input type="text" style="width:150px">
                    </div>
                    <div class="form-elem">
                        Kabul edijiniň tel.belgisi
                        <input type="text" style="width:150px">
                    </div>
                </div>
                <div style="display:flex;justify-content:space-around;">
                    <div class="form-button">
                        Оформить
                    </div>
                    <div class="form-button close" @click="finishFillBlank()">
                        Отмена
                    </div>
                </div>
            </div>
            <div class="blank-backface" ref="blankB"></div>
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
        //addEventListener('scroll',this.scrollControl)
        //this.scrollControl()
        addEventListener('resize', this.resizeControl)
        this.resizeControl()
    },
    methods:{
        resizeControl(){
            let windowWith = document.documentElement.clientWidth
            document.getElementById('post_title_image').style.width = `${ windowWith / 1.7}px`

            let ban = this.$refs.banner
            let blank = this.$refs.blank
            let blankB = this.$refs.blankB
            if ( windowWith < 640 ) { 
                ban.style.width = `${windowWith - 40}px` 
                ban.style.height = `${(windowWith - 40) / 1.27}px`
            } else {
                ban.style.width = '600px'
                ban.style.height = '470px'
            }
            if ( windowWith < 510 ){
                blank.style.padding = '100px 20px 0px 10px'
                blank.style.width = `${ windowWith-60 }px`
                blankB.style.width = `${ windowWith-60 }px`
            }else{
                blank.style.padding = '100px 110px 0px 100px'
                blank.style.width = `400px`
                blankB.style.width = `500px`
            }
        },
        scrollControl(){
            let wt = window.scrollY
            let wh = window.innerHeight
            let et = this.$refs.container.offsetTop
            let eh = this.$refs.container.offsetHeight
            //this.$refs.banner.style.left = ((et + eh > wt) && (wt >= et)) ?  '0px' : '-630px'
            console.log('window top=',wt)
            console.log('window height=',wh)
            console.log('elem top=',et)
            console.log('elem height=',eh)
        },
        startFillBlank(){
            document.getElementsByClassName('black')[0].style.display = 'none'
            document.getElementsByClassName('blank')[0].classList.add('begin')
            document.getElementsByClassName('blank-backface')[0].classList.add('begin')
        },
        finishFillBlank(){
            document.getElementsByClassName('blank')[0].classList.remove('begin')
            document.getElementsByClassName('blank-backface')[0].classList.remove('begin')
            document.getElementsByClassName('blank')[0].classList.add('end')
            document.getElementsByClassName('blank-backface')[0].classList.add('end')
            setTimeout(function(){
                document.getElementsByClassName('blank')[0].classList.remove('end')
                document.getElementsByClassName('blank-backface')[0].classList.remove('end')
                document.getElementsByClassName('black')[0].style.display = 'flex'
            },1000)
        }
    }
}
</script>

<style lang="less" scoped src="../assets/less/ordering.less">

</style>
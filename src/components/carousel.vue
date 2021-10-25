<template>
    <div id="wrapper">
        <div class="wrapper-panel">
            <div class="prev" @click="setChange(-2)">
                <img src="../assets/img/polygon_1.svg" style="width:100%; height:100%;">
            </div>
            <div class="timer">
                <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="40%" stroke="#FFDD00" class="timer-icon">
                    <animate id="timer" attributeName="stroke-dasharray" :values="'0,1000;'+circleLen+',1000'" dur="10s"  />
                </circle>
                <circle cx="50%" cy="50%" r="3%" stroke="#FFDD00" />
                </svg>
            </div>
            <div class="next" @click="setChange(0)">
                <img src="../assets/img/polygon_2.svg" style="width:100%; height:100%;">
            </div>
        </div>
        <div class="img1 enter"></div>
        <div class="img2 wait"></div>
        <div class="img3 leave"></div>
        
    </div>    
</template>

<script>
export default {
    data(){
        return {
            img:['img1', 'img2', 'img3'],
            wFocus:true,
            x:0,
            y:1,
            z:2,
            isSend:0,
            clickStatus:false,
            prev:false,
            circleLen:0
        }
    },
    created(){
        window.addEventListener("resize", this.resizeControl)
        //window.addEventListener("focus", function(){ this.wFocus = true; this.wrapper() })
        //window.addEventListener("blur", function(){ this.wFocus = false; })
    },
    mounted(){
        this.resizeControl()
        this.wrapper(0)
    },
    destroyed(){
        window.addEventListener("resize", this.resizeControl)
        //window.addEventListener("focus", function(){ this.wFocus = true; this.wrapper() })
        //window.addEventListener("blur", function(){ this.wFocus = false; })
    },
    methods:{
        buttonResize(Wwith, el){
            el.style.margin = `${Wwith / 128}px`
            el.style.height = `${Wwith / 42}px`
            el.style.width = `${Wwith / 42}px`
        },
        resizeControl(){
            // default width = 1280px
            let windowWith = document.documentElement.clientWidth
            document.getElementById('wrapper').style.height = `${windowWith / 3.2}px`
            document.getElementsByClassName('img3')[0].style.height = `${windowWith / 3.2}px`
            document.getElementsByClassName('img2')[0].style.height = `${windowWith / 3.2}px`
            document.getElementsByClassName('img1')[0].style.height = `${windowWith / 3.2}px`
            document.getElementsByClassName('wrapper-panel')[0].style.margin = `${windowWith / 128}px ${windowWith / 64}px`
            this.buttonResize(windowWith, document.getElementsByClassName('prev')[0])
            this.buttonResize(windowWith, document.getElementsByClassName('timer')[0])
            this.buttonResize(windowWith, document.getElementsByClassName('next')[0])
            let w = document.getElementsByClassName('timer')[0].style.width
            this.circleLen = (parseInt(w)/100)*82 * 3.14
        },
        async wrap(){
            let vm = this
            let imgX = document.getElementsByClassName(vm.img[vm.x])[0]
            let imgY = document.getElementsByClassName(vm.img[vm.y])[0]
            let imgZ = document.getElementsByClassName(vm.img[vm.z])[0]
            if (this.prev) {
                imgX.style.zIndex = 1
                imgY.style.zIndex = 2
                imgZ.style.zIndex = 2
                this.prev = false
            } else {
                imgX.style.zIndex = 2
                imgY.style.zIndex = 2
                imgZ.style.zIndex = 1
            }
            imgX.classList.remove("enter")
            imgX.classList.remove("wait")
            imgX.classList.add("leave")
            imgY.classList.remove("wait")
            imgY.classList.remove("leave")
            imgY.classList.add("enter")
            imgZ.classList.remove("leave")
            imgZ.classList.remove("enter")
            imgZ.classList.add("wait")
        },
        async wrapper(send){
            let vm = this
            if (send == vm.isSend) {
                vm.wrap()
                vm.wrapChange(1)
                document.getElementById("timer").beginElement()
                setTimeout(this.wrapper,10000,send)
            }
        },
        setChange(v){
            if ( v < 0 ) { this.prev = true}
            if (this.clickStatus) {return }
            this.clickStatus = true
            setTimeout(()=>{ this.clickStatus = false },700)
            this.wrapChange(v)
            this.isSend ++ 
            this.wrapper(this.isSend)
        },
        wrapChange(v){
            this.x = this.change( this.x + v )
            this.y = this.change( this.y + v )
            this.z = this.change( this.z + v )
        },
        change(x){
            if ( x < 0 ) { return (3 + x) }
            else { if ( x > 2) { return (x - 3) } else {return x} }
        }
    }
}
</script>

<style lang="less" scoped src="../assets/less/carousel.less">

</style>
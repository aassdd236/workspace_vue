<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <div class="box" v-bind:class="{'box-red': isRed, 'box-blue': isBlue, 'f-bold':isBold, 
                                    'f-big':isSize, 'f-ita':isIta}">{{ boxText }}</div>

    <button v-on:click="redBox" type="button">빨간박스적용</button>
    <button v-on:click="blueBox" type="button">파란박스적용</button>
    <button v-on:click="boldOnOff" type="button">볼드 on/off</button>
    <button v-on:click="sizeOnOff" type="button">크기 on/off</button>
    <button v-on:click="itaOnOff" type="button">스타일 on/off</button>

    <br><br><br>
    <p style="color: #ff0000;">인라인 스타일로 태그에 스타일 직접 추가</p>

    <p v-bind:style="type">인라인 스타일로 태그에 스타일 직접 추가</p>
    <button v-on:click="changeType" type="button">인라인스타일변경</button>
</template>
<script>

export default {
    name: "Ex04View",
    components: {},
    data() {
        return {
           title: "Vue공부",
           subTitle: "class속성 제어",
           boxText: "vue공부 재미없음",
           isRed: false,
           isBlue: false,
           isBold: false,
           isSize: false,
           isIta: false,
           type: ""
        };
    },
    methods: {
       redBox(){
            this.isRed=true;
            this.isBlue=false;
       },
       blueBox(){
            this.isBlue=true;
            this.isRed=false;
       },
       boldOnOff(){
            if(this.isBold==true){
                this.isBold = false;
            }else{
                this.isBold = true;
            }
       },
       sizeOnOff(){
            this.isSize= !this.isSize;
       },
       itaOnOff(){
            this.isIta= !this.isIta;
       },
       changeType(){
            console.log("클");
            this.type="color: #ff0000; font-size: 40px";
       }
    },
};
</script>
<style>
.box{
    width: 150px;
    border: 1px solid #000000;
}

.box-red{
    background-color: #ff0000;
}

.box-blue{
    background-color: #0000ff;
}

.f-bold{font-weight: bold;}

.f-big{font-size: 20px;}

.f-ita{font-style: italic;}
</style>

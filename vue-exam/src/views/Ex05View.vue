<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <!-- form 전송 클릭이벤트와 다름 > form에 submit으로 줘야 함 -->
    <form v-on:submit.prevent="getPersonVo" action="" method="get">
        <label for="uName">이름</label>
        <input id="uName" type="text" name="name" v-model="personVo.name">
        <br>
        <label>전화번호</label>
        <input type="text" name="hp" v-model="personVo.hp">
        <br>
        <textarea name="content" v-model="personVo.content"></textarea>
        <br><br>
        <button v-on:click="setPersonVo" type="button">값쓰기</button>
        <br><br>
        <button type="submit">값 수정</button>
    </form>

</template>
<script>

export default {
    name: "Ex05View",
    components: {},
    data() {
        return {
          title: "vue공부",
          subTitle: "폼-txt 양방향 model, 아니면 bind 어쩌궁",
          personVo: {
            name: "",
            hp: "",
            content: ""
          }
        };
    },
    methods: {
      setPersonVo(){
        console.log("클릭");

        let pVo = {
            name: "정우성",
            hp: "010-2222-2222",
            content: "영화배우 정우성"
        };
        this.personVo = pVo;
        /*
        this.name="정우성";
        this.hp="010-2222-2222";
        this.content="영화배우 정우성";
        */
      },
      getPersonVo(){
        console.log("데이터 수집");
        console.log("서버로 전송");

        console.log(this.personVo);
      }
    },
};
</script>
<style>

</style>

<template>
        <h1>{{title}}</h1>
        <h2>{{subTitle}}</h2>
        
        <ul>
            <li>{{menus[0]}}</li>
            <li>{{menus[1]}}</li>
            <li>{{menus[2]}}</li>
        </ul>

        <table border="1">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>핸드폰</th>
                    <th>회사</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{{personVo.no}}</th>
                    <th>{{personVo.name}}</th>
                    <th>{{personVo.hp}}</th>
                    <th>{{personVo.company}}</th>
                </tr>
            </tbody>
        </table>

        <p>{{content }}</p>
        <p v-html="content"></p>

        <img v-bind:src="imgUrl">

</template>
<script>

export default {
    name: "Ex02View",
    components: {},
    data() {
        return {
            title: "vue공부",
            subTitle: "데이터바인딩",
            menus: ["게시판", "갤러리", "방명록"],
            personVo:{
                no: 1,
                name: "이효리",
                hp: "010-9999-9999",
                company: "02-999-9999"
            },
            content: "지금부터 <strong>열심히</strong> 공부하겠습니다",
            imgUrl: "https://mml.pstatic.net/www/mobile/edit/20240318_1095/upload_1710771613913KFcqp.gif"
        };
    },
    methods: {},
};
</script>
<style></style>

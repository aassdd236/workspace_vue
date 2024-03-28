<template>
    <div>
        <h1>전화번호부</h1>

        <h2>수정폼</h2>

        <p>
            전화번호를 수정하려면<br>
            아래 항목을 기입하고 "수정" 버튼을 클릭하세요
        </p>

        <form v-on:submit.prevent="modify" action="" method="">
            <div>
                <label>이름(name)</label>
                <input type="text" name="name" v-model="userVo.name">
            </div>

            <div>
                <label>핸드폰(hp)</label>
                <input type="text" name="hp" v-model="userVo.hp">
            </div>

            <div>
                <label>회사(company)</label>
                <input type="text" name="company" v-model="userVo.company">
            </div>

            <input type="text" name="personId" v-model="userVo.no"><br>
            <button type="submit">수정</button>

        </form>

        <br><br>
        <a href="">리스트 이동</a>


    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "ModifyFormView",
    components: {},
    data() {
        return {
            personVo: {
                personId: "",
                name: "",
                hp: "",
                company: ""
            }
        };
    },
    methods: {
        getAuthUser() {
            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9000/api/modifyform/'+this.personVo.personId,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                }, //전송타입 + 토큰
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.personVo = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });
        },
        modifyUser() {
            console.log("클릭");
            axios({
                method: 'put', // get, post, delete                   
                url: 'http://localhost:9000/api/modify/'+this.personVo.personId,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                }, //전송타입 + 토큰
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.personVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
            }).catch(error => {
                console.log(error);
            });
        }

    },
    created() {
        this.getAuthUser();
    }
};
</script>
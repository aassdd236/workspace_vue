<template>
    <div>
        <table border="1">
            <colgroup>
                <col style="width: 40px;">
                <col style="width: 70px;">
                <col style="width: 150px;">
                <col style="width: 160px;">
                <col style="width: 40px;">
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>핸드폰</th>
                    <th>회사</th>
                    <th>성별</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="i" v-for="(personVo, i) in pList">
                    <td>{{ personVo.no }}</td>
                    <td>{{ personVo.name }}</td>
                    <td>{{ personVo.hp }}</td>
                    <td>{{ personVo.company }}</td>
                    <td>{{ personVo.gender }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "ListView",
    components: {},
    data() {
        return {
            pList: [],
            personVo: {
                no: "",
                name: "",
                hp: "",
                company: "",
                gender: ""
            }
        };
    },
    methods: {
        getList() {
            axios({
                method: 'get', // put, post, delete                   
                url: 'https://raw.githubusercontent.com/clz2024-red/api/main/person.json',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: personVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.pList = response.data
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() { 
        this.getList();
    }
};
</script>

<style>
table{
    text-align: center;
    border: 1px solid #000000;
    border-collapse: collapse;
}
table>thead{
    background-color: #d6d6d6;

}
</style>
<template>
    <div>
        <h1>전화번호부</h1>

        <h2>리스트</h2>

        <p>등록된 전화번호 리스트입니다.</p>

        <table border="1">
            <colgroup>
                <col style="width: 100px;">
                <col style="width: 120px;">
                <col style="width: 120px;">
                <col style="width: 190px;">
            </colgroup>
            <thead>
                <tr>
                    <th>이름(name)</th>
                    <th>핸드폰(hp)</th>
                    <th>회사(company)</th>
                    <th>관리</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="i" v-for="(personVo, i) in pList">
                    <td>{{ personVo.name }}</td>
                    <td>{{ personVo.hp }}</td>
                    <td>{{ personVo.company }}</td>
                    <td>
                        <button type="button">삭제하기</button>&nbsp;&nbsp; <!--공백메시지-->
                        <router-link v-bind:to="`/modifyform/${personVo.personId}`">[수정폼이동]</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>

        <router-link to="/write">등록폼 이동</router-link>


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
                personId: "",
                name: "",
                hp: "",
                company: ""
            }
        };
    },
    methods: {
        getList() {
            console.log("리스트 불러오기");
            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9090/api/list',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.pList = response.data.apiData;
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
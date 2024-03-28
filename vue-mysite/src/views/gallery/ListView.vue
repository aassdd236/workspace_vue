<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">
                <div id="aside">
                    <h2>갤러리</h2>
                    <ul>
                        <li><a href="">일반갤러리</a></li>
                        <li><a href="">파일첨부연습</a></li>
                    </ul>
                </div>
                <!-- //aside -->

                <div id="content">
                    <div id="content-head">
                        <h3>일반갤러리</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>갤러리</li>
                                <li class="last">일반갤러리</li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- //content-head -->


                    <div id="gallery">
                        <div id="list">


                            <button id="btnImgUpload">이미지올리기</button>
                            <div class="clear"></div>


                            <ul id="viewArea">

                                <!-- 이미지반복영역 -->
                                <li>
                                    <div class="view">
                                        <img class="imgItem" src="">
                                        <div class="imgWriter">작성자: <strong>유재석</strong></div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <!-- //list -->
                    </div>
                    <!-- //	gallery -->

                </div>
                <!-- //content  -->

            </div>
            <!-- //container  -->
            <AppFooter />
        </div>
        <!-- //wrap -->

    </div>
</template>


<script>
import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"


export default {
    name: "ListView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>
<template>
    <div>
        <div id="header" class="clearfix">
            
            <router-link to="/">
                <img id="logo" src="@/assets/img/conan.png" alt="conan" width="150px" />
            </router-link>
            
        </div>
        <!-- //header -->
    </div> 
</template>
<script>
import '@/assets/css/AppHeader.css'

export default {
    name: "AppHeader",
    components: {},
    data() {
        return {};
    },
    methods: {
    },
    created() { }
};
</script>
<template>
    <div id="gallery">
        <div id="list">
            <ul id="viewArea">
                <li>
                    <p> 팝콘 </p>
                </li>
                <li v-for="(item, index) in items" :key="index">
                    <div class="view">
                        <img class="img" :src="item.imageSrc">
                        <div class="imgWriter">
                            {{ item.name }}
                            <br>
                            <strong>{{ item.price }}원</strong>
                        </div>
                    </div>
                </li>
                <li>
                    <p> 음료 </p>
                </li>
                
                <li v-for="(item01, index) in items01" :key="index">
                    <div class="view">
                        <img class="img" :src="item01.imageSrc">
                        <div class="imgWriter">
                            {{ item01.name }}
                            <br>
                            <strong>{{ item01.price }}원</strong>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import "@/assets/List.css"
export default {
    name: "ListView",
    data() {
        return {
            items: [
                { name: "카라멜팝콘L", price: 6500, imageSrc: require("@/assets/image/caramel.jpg") },
                { name: "고소한팝콘L", price: 6000, imageSrc: require("@/assets/image/corn.jpg") },
                { name: "치즈팝콘L", price: 6500, imageSrc: require("@/assets/image/cheese.jpg") },
                { name: "카라멜팝콘M", price: 6500, imageSrc: require("@/assets/image/caramelM.jpg") },
                { name: "고소한팝콘M", price: 6000, imageSrc: require("@/assets/image/cornM.jpg") },
                { name: "치즈팝콘M", price: 6500, imageSrc: require("@/assets/image/cheeseM.jpg") },
            ],
            items01: [
                { name: "탄산음료L", price: 3500, imageSrc: require("@/assets/image/coke.jpg") },
                { name: "탄산음료M", price: 3000, imageSrc: require("@/assets/image/cokeM.jpg") },
                { name: "에이드", price: 5500, imageSrc: require("@/assets/image/ade.jpg") },
            ]
        };
    }
};
</script>



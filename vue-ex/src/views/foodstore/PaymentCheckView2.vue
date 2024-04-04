<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">

                    <div id="paymentForm" action="" method="">
                        <h1>결제 수단 선택</h1>
                        <div class="price-info">
                            <p class="total-price">총 금액: {{ $store.state.totalPrice }}원</p>
                        </div>
                        <div class="payment-methods">
                            <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                <PaymentContentView></PaymentContentView>
                            </ModalView>


                            <div class="payment-method" @click="processPayment">
                                <img id="card" src="@/assets/img/card.png">카드 결제
                            </div>
                            <div class="payment-method" @click="processPayment">
                                <img id="cash" src="@/assets/img/cash.png">현금 결제
                            </div>
                        </div>
                        <input type="hidden" name="payment_method" id="paymentMethod">
                        <input type="submit" value="결제">
                    </div>
                    <div>
                    </div>

                </div>
                <!-- //content  -->

            </div>
            <!-- //container  -->
            <AppFooter />
            <!-- //footer -->
        </div>
        <!-- //wrap -->
    </div>
</template>

<script>
import axios from 'axios';
import "@/assets/css/PaymentCheckView.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import ModalView from "@/components/ModalView.vue";
import PaymentContentView from '@/components/PaymentContentView.vue';

export default {
    name: "FoodstoreView",
    components: {
        AppFooter,
        AppHeader,
        ModalView,
        PaymentContentView
    },
    data() {
        return {
            isModalViewed: false,
            
        };
    },
    methods: {
        processPayment() {
            this.suc();
            this.point();
            
        },
        suc() {
            this.isModalViewed=true;
            console.log("우웩");
            let pointVo = {
                orderItemList: this.$store.state.cartItems,
                phoneNumber: this.$store.state.phoneNumber
            };

            console.log(pointVo);

            this.isModalViewed = true;
            axios({
                method: 'post',
                url: 'http://localhost:9000/api/food/order',
                headers: { "Content-Type": "application/json; charset=utf-8" },
                data: pointVo,
                responseType: 'json'
            }).then(response => {
                console.log(response.data);
            })
                .catch(error => {
                    console.error(error);
                });
        },
        point() {
            axios({
                method: 'put',
                url: 'http://localhost:9000/api/food/pointuse',
                headers: { "Content-Type": "application/json; charset=utf-8" },
                data: {
                    phoneNumber: this.$store.state.phoneNumber,
                    point: this.$store.state.totalPoint
                },
                responseType: 'json'
            })
                .then(response => {
                    console.log(response.data);

                })
                .catch(error => {
                    console.error(error);
                });
        }

    }
};
</script>
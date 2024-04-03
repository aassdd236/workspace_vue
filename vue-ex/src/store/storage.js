import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            totalPrice: "",
            cartItems: [],
            phoneNumber: "",
            totalPoint: "",
            point: "",
            plusPoint: "",
            usePoint: ""
        };
    },
    mutations: {
        setTotalPrice(state, payload) { /* FoodstoreView 상품총가격 */
            state.totalPrice = payload;
        },
        setCartItems(state, payload) { /* FoodstoreView 장바구니 목록 */
            state.cartItems = payload;
        },
        setPlusPoint(state, payload) { /* FoodstoreView 적립될 포인트 */
            state.plusPoint = payload;
        },
        setPhoneNumber(state, payload) { /* PlusPoint2View 적립폰번호*/
            state.phoneNumber = payload;
        },
        setTotalPoint(state, payload) { /* EndPointView 바뀔 포인트*/
            state.totalPoint = payload;
        },
        setPoint(state, payload) {  /* PlusPoint2View 기존 포인트 */
            state.point = payload;
        },
        setUsePoint(state, payload) { /* PointUse2 기존 포인트  */
            state.usePoint = payload;
        },
    }
});
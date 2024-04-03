<template>
  <div class="content">
    <!-- 이미지등록 팝업(모달)창 -->
    <form action="" method="" enctype="multipart/form-data">
      <div class="m-body">
        <h1>결제 완료</h1>
        <div class="ticket">
          <div class="order-number"> 주문 <br> 번호</div>
          <div class="number"> 68 </div>
          <div class="money">
            [결제 내역]
          </div>
          <div class="moneyList">
            음식 목록 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6000원
          </div>
          <div class="point">
            이*슬 님!
            <br>
            사용 가능 포인트 0점
          </div>

          <!-- 바코드 이미지 추가 -->
          <img src="../assets/qrimages.png" class="barcode">

        </div>


      </div>
    </form>
  </div>
</template>


<script>
import "@/assets/css/PaymentContent2View.css";

export default {
  name: "ContentView",
  components: {},
  data() {
    return {

    };
  },
  methods: {
    //모달창 닫기 버튼(X) 클릭했을 때
    closePayModal() {
      console.log("클릭");
    },
  },
  created() {
  }
};
</script>

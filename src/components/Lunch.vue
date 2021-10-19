<template>
<header>
        <nav class="inner">
            <div class="header-ctn">
            <a href="../index.html"><div class="logo">코인만 보면 짖는 흑우</div></a>
            </div>
        </nav>
    </header>
    <section>
        <div class="inner">
            <nav class="location">
                <div style="color:#2690f3;" class="click-text">아직 안산 흑돈까스없재?</div>
                <div style="color:#2690f3;" class="loading-text">흑우가 신내림을 받는중입니다...</div>
                <a style="color: #b9b9b9;" href="../bithumb.html"></a>
            </nav>
           
        </div>
    </section>
    <section>
        <div class="inner">
            <div class="content-ctn">
            <div class="content-img">
                <img class="click-img" src="@/assets/img/cow1.jpg" alt="" onclick="document.querySelector('.click-btn').click();">
                <img class= "result-img" src="@/assets/img/cow2.jpg" alt="">
                <img class= "loading-img" src="@/assets/img/cow3.gif" alt="">
            </div>
            <div class="content-btn">
                <!-- <button class="click-btn" onclick="random(upbitList); clickEvent();"></button> -->
                <button class="click-btn" onclick="clickEvent();"></button>
                </div>

                <div class="content-explanation">
                    당신에게 내려진 코인은
                </div>
                <div class="result-coin rst-up"></div>
                <div id="test" class="result-coin-changed">                    
                    <p class="result-coins rst-up">최고가: <span class="result-coin-highprice"></span></p>
                    <p class="result-coins rst-up">최저가: <span class="result-coin-lowprice"></span></p>
                    <p class="result-coins rst-up">전일대비: <span class="result-coin-signedchange"></span></p>
                    <p class="result-coins rst-up">현재가격: <span class="result-coin-tradeprice"></span></p>
                </div>                
                <div class="content-text">
                    미친 흑우를 클릭해 <br>신탁을 받으십시오
                </div>
                <div class="loading-text">
                    미친 흑우가 신탁을 <br>내리고 있습니다..
                </div>
                <button class="replay rpy-up" onclick="location.replace('index.html')">한 번만 더요..!</button>
            </div>
        </div>
    </section>
       <section>
           <div class="inner">
               <div class="ad">
            <ins class="kakao_ad_area" style="display:none;" 
            data-ad-unit    = "DAN-DOblxpKku6weKNFZ" 
            data-ad-width   = "320" 
            data-ad-height  = "100">
            </ins> 
            </div>
        </div>
       </section>

       <section>
        <div class="inner">
            <div class="help-god-ctn">
                <button class="open-btn">
                    <img src="@/assets/img/cow4.jpg" alt="">
                </button>
            </div>
        </div>
    </section>


       <section>
        <div class="inner">
            <div class="ad">
                <ins class="kakao_ad_area" style="display:none;" 
                data-ad-unit    = "DAN-1Weuw8p6LODbAmRg" 
                data-ad-width   = "300" 
                data-ad-height  = "250"></ins> 
         </div>
     </div>
    </section>
  

    <!-- <section>
        <div class="inner">
            <div class="youtube-ctn">
           <a class="youtube-link" href="./youtubecoin.html">
             <img src="@/assets/img/유무새.jpg" alt="유무새"> 
             <div>유무새의 코인유튜버 쪽집기</div>
         </a>
         </div>
        </div>
    </section> -->


    <section>
        <div class="inner">
            <div class="ad">
                <ins class="kakao_ad_area" style="display:none;" 
                    data-ad-unit    = "DAN-2uCko65PyapmFKN4" 
                    data-ad-width   = "320" 
                    data-ad-height  = "100"></ins> 
            </div>
        </div>
    </section>

       

       <div class="modal hidden">
        <div class="bg"></div>
        <div class="modal-box">
            <img src="@/assets/img/기도모달.jpg" alt="">
            <ins class="kakao_ad_area" style="display:none;" 
                data-ad-unit    = "DAN-AUPg5p4n56Qre42i" 
                data-ad-width   = "320" 
                data-ad-height  = "100"></ins> 
                <p>아무곳이나 클릭하세요</p>
        </div>
    </div>
</template>

<script>
require('@/assets/css/style.css')
require('@/blackcow.js')
export default {
  name: 'Lunch',
  data(){

  },
  mounted(){
      this.fnTest()
  },
  methods:{
    fnTest(){
        // const open = () => {
        //     document.querySelector(".modal").classList.remove("hidden");
        //     console.log('open');
        // }
        // const close = () => {
        //     document.querySelector(".modal").classList.add("hidden"); 
        // }


        document.getElementsByClassName('.replay').style.display='none'; 
        document.getElementsByClassName('.content-explanation').style.display='none'; 
        document.getElementsByClassName('.result-img').style.display='none'; 
        document.getElementsByClassName('.loading-img').style.display='none'; 
        document.getElementsByClassName('.loading-text').style.display='none'; 
        document.getElementsByClassName('.result-coin-changed').style.display='none'; 

    // $('.replay').hide();
    // $('.content-explanation').hide();
    // $('.result-img').hide();
    // $('.loading-img').hide();
    // $('.loading-text').hide();
    // $('.loading-text').hide();
    // $('.result-coin-changed').hide();        



        document.querySelector(".open-btn").addEventListener("click",open);
        document.querySelector(".modal").addEventListener("click",close);
        document.querySelector(".bg").addEventListener("click",close);      
    }
  }
}
</script>

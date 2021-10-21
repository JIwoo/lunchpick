<template>
    <header>
        <nav class="inner">
            <div class="header-ctn">
            <a href="/"><div class="logo">점심 골라주는 돼지</div></a>
            </div>
        </nav>
    </header>
    <section>
        <div class="inner">
            <nav class="location">
                <div style="color:#2690f3;" class="click-text">점심 굶는 다이어터 없재?</div>
                <div style="color:#ae3c3c;" class="fail-text">메뉴를 먼저 선택하세요</div>
                <div style="color:#2690f3;" class="loading-text">돼지가 신내림을 받는중입니다...</div>
            </nav>     
        </div>
    </section>
    <section>
        <div class="inner">
            <div class="content-ctn">
            <div class="content-img">
                <img class="click-img" src="@/assets/img/pig1.jpg" alt="" onclick="document.querySelector('.click-btn').click();">
                <img class= "result-img" src="@/assets/img/pig2.jpg" alt="">
                <img class= "loading-img" src="@/assets/img/pig3.gif" alt="">
            </div>
            <div class="content-btn">
                <button class="click-btn" @click="fnEvent()"></button>
                </div>

                <div class="content-explanation">
                    당신에게 내려진 메뉴는
                </div>
                <div class="result-coin rst-up"></div>
                <div class="result-coin-changed">             
                    <p class="result-coins rst-up">메뉴명: <span class="" id="menu"></span></p>       
                    <p class="result-coins rst-up">칼로리: <span class="" id="Cal"></span></p>
                    <p class="coin-down">성인 하루 권장칼로리</p>        
                    <span class="txt-daily">남자: 2,500Cal</span> - <span class="txt-daily">여자: 2,000Cal</span>            
                    
                </div>                
                <div class="" style="margin-top: 3%;">
                    <input type="checkbox" id="cbbob" name="chk" value="밥"/>
                    <label for="cbbob" class="cb">밥</label>
                    <input type="checkbox" id="cbmyun" name="chk" value="면"/>
                    <label for="cbmyun" class="cb">면</label>       
                    <input type="checkbox" id="cbj" name="chk" value="찌개"/>
                    <label for="cbj" class="cb">국물</label>     
                    <input type="checkbox" id="cbb" name="chk" value="간편"/>
                    <label for="cbb" class="cb">간편</label>                                                                                              
                </div>                
                <div class="content-text">
                    메뉴를 선택 후 <br>귀여운 돼지를 클릭해 <br>점심추천을 받아보세요
                </div>
                <div class="loading-text">
                    귀여운 돼지가 신탁을 <br>내리고 있습니다..
                </div>
                <button class="replay rpy-up" onclick="location.replace('/')">한 번만 더요..!</button>
            </div>
        </div>
    </section>
    <section>
        <div class="inner">
            <div class="help-god-ctn">
                <button class="open-btn">
                    <img src="@/assets/img/pig4.jpg" alt="">
                </button>
            </div>
        </div>
    </section>
</template>

<script>
require('@/assets/css/style.css')
require('@/lunch.js')
export default {
  name: 'Lunch',
  data(){
      return{
        foods: [
            {name: '밥', data: [
                {"name":"새우볶음밥", 'Cal':"241"},
                {"name":"비빔밥", 'Cal':"586"},
                {"name":"오므라이스", 'Cal':"380"},
                {"name":"제육덮밥", 'Cal':"779"},
                {"name":"오징어덮밥", 'Cal':"667"},                
                {"name":"육회비빔밥", 'Cal':"531"},
                {"name":"돈까스", 'Cal':"568"},
                {"name":"일식돈까스", 'Cal':"565"},
                {"name":"가츠동", 'Cal':"650"},
                {"name":"규동", 'Cal':"614"},
                {"name":"초밥", 'Cal':"개당 37"},
                {"name":"마파두부밥", 'Cal':"360"},
                {"name":"보쌈정식", 'Cal':"844"},
                {"name":"백반", 'Cal':"830"},
                {"name":"생선구이", 'Cal':"406"},
                {"name":"뚝배기불고기", 'Cal':"317"},
                {"name":"한식부페", 'Cal':"먹는만큼"},
                {"name":"김치볶음밥", 'Cal':"446"},
                {"name":"쌈밥", 'Cal':"좀만먹어"},
                {"name":"돈부리", 'Cal':"655"},
                {"name":"연어덮밥", 'Cal':"574"},
                {"name":"장어덮밥", 'Cal':"626"},
                {"name":"카레", 'Cal':"544"},
                {"name":"잡채밥", 'Cal':"673"},
            ]},
            {name: '면', data: [
                {"name":"짜장면", 'Cal':"785"},
                {"name":"짬뽕", 'Cal':"764"},
                {"name":"쌀국수", 'Cal':"320"},
                {"name":"우동", 'Cal':"361"},
                {"name":"메밀국수", 'Cal':"113"},
                {"name":"크림파스타", 'Cal':"275"},
                {"name":"봉골레", 'Cal':"479"},
                {"name":"토마토파스타", 'Cal':"116"},
                {"name":"칼국수", 'Cal':"420"},
                {"name":"물냉면", 'Cal':"383"},
                {"name":"비빔냉면", 'Cal':"463"},
                {"name":"로제파스타", 'Cal':"225"},
                {"name":"잔치국수", 'Cal':"447"},
                {"name":"콩국수", 'Cal':"513"},
                {"name":"비빔국수", 'Cal':"425"},
                {"name":"막국수", 'Cal':"452"},
                {"name":"일본라멘", 'Cal':"395"},
                {"name":"라면", 'Cal':"385"},
            ]},
            {name: '국물', data: [
                {"name":"짬뽕밥", 'Cal':"482"},
                {"name":"김치찌개", 'Cal':"128"},
                {"name":"된장찌개", 'Cal':"171"},
                {"name":"부대찌개", 'Cal':"626"},
                {"name":"육개장", 'Cal':"165"},
                {"name":"뼈해장국", 'Cal':"309"},
                {"name":"순대국밥", 'Cal':"360"},
                {"name":"샤브샤브", 'Cal':"384"},
                {"name":"마라탕", 'Cal':"175"},
                {"name":"선지해장국", 'Cal':"430"},
                {"name":"설렁탕", 'Cal':"424"},
                {"name":"갈비탕", 'Cal':"466"},
                {"name":"순두부찌개", 'Cal':"259"},
                {"name":"청국장", 'Cal':"117"},
                {"name":"콩나물국밥", 'Cal':"445"},
                {"name":"삼계탕", 'Cal':"454"},
                {"name":"오징어찌개", 'Cal':"163"},
                {"name":"비지찌개", 'Cal':"121"},                
                {"name":"추어탕", 'Cal':"194"},
                {"name":"만두국", 'Cal':"418"},
                {"name":"동태탕", 'Cal':"158"},
            ]},
            {name: '간편', data: [
                {"name":"라면", 'Cal':"385"},
                {"name":"김밥", 'Cal':"485"},
                {"name":"햄버거", 'Cal':"426"},
                {"name":"편의점도시락", 'Cal':"720"},
                {"name":"샐러드", 'Cal':"16"},
                {"name":"샌드위치", 'Cal':"252"},
                {"name":"떡튀순", 'Cal':"280"},
                {"name":"핫도그", 'Cal':"242"},
                {"name":"시리얼", 'Cal':"124"},
                {"name":"토스트", 'Cal':"420"},
                {"name":"삼각김밥", 'Cal':"174"},
                {"name":"핫바", 'Cal':"184"},
                {"name":"오뎅", 'Cal':"70"},
                {"name":"다이어트", 'Cal':"죽을만큼 뛰어라"},
                {"name":"물", 'Cal':"0"},
                {"name":"부리또", 'Cal':"253"},
                {"name":"피자", 'Cal':"조각당 255"},
                {"name":"치킨", 'Cal':"조각당 249"},
                {"name":"죽", 'Cal':"214"},
                {"name":"고구마", 'Cal':"193"},
                {"name":"계란", 'Cal':"77"},
            ]},                                                            
        ]          
      }      
  },
  mounted(){
      this.fnInit()
  },
  methods:{
    fnInit(){

        let replay = document.querySelector(".replay")
        let contentExplanation = document.querySelector(".content-explanation")
        let resultImg = document.querySelector(".result-img")
        let loadingImg = document.querySelector(".loading-img")
        let loadingText = document.querySelectorAll(".loading-text")
        let resultCoinChanged = document.querySelector(".result-coin-changed")
        let failText = document.querySelector(".fail-text")

        replay.style.display = 'none'
        contentExplanation.style.display = 'none'
        resultImg.style.display = 'none'
        loadingImg.style.display = 'none'
        resultCoinChanged.style.display = 'none'
        failText.style.display = 'none'

        for (let i = 0; i < loadingText.length; i++) {
            let item = loadingText.item(i);
            item.style.display = 'none'
        }          
    },
    fnEvent(){
        let contentText = document.querySelector(".content-text")
        let clickImg = document.querySelector(".click-img")
        let resultCoin = document.querySelector(".result-coin")
        let clickText = document.querySelector(".click-text")
        let loadingImg = document.querySelector(".loading-img")
        let loadingText = document.querySelectorAll(".loading-text")   
        let failText = document.querySelector(".fail-text")          
        let replay = document.querySelector(".replay")    
        let contentExplanation = document.querySelector(".content-explanation")
        let resultImg = document.querySelector(".result-img")
        let resultCoinChanged = document.querySelector(".result-coin-changed")

        let list = []

        const node = document.getElementsByName("chk")
        for(let i=0;i<node.length;i++){
            if (node[i].checked){
                list.push(node[i].value)
            }
        }  

        if(list.length > 0){
            
            contentText.style.display = 'none'
            clickImg.style.display = 'none'
            resultCoin.style.display = 'none'
            clickText.style.display = 'none'
            failText.style.display = 'none'
            loadingImg.style.display = 'block'   


            for (let i = 0; i < loadingText.length; i++) {
                let item = loadingText.item(i);
                item.style.display = 'block'
            }

            this.fnCall(list)

            setTimeout(function() {
                loadingImg.style.display = 'none'                          
                for (let i = 0; i < loadingText.length; i++) {
                    let item = loadingText.item(i);
                    item.style.display = 'none'
                }

                resultCoin.style.display = 'block'   
                contentExplanation.style.display = 'block'   
                resultImg.style.display = 'block'   
                resultCoinChanged.style.display = 'block'     
                replay.style.display = 'block'  

                document.querySelector(".location").style.display = 'none'     

            },2000);     

        }
        else{            
            failText.style.display = 'block'
            clickText.style.display = 'none'
        }
    },
    fnRand(list){
        return Math.floor(Math.random() * list.length);
    },
    fnCall(list){
        const rand = this.fnRand(list)

        const menuData = this.foods.find((ele) => {
            return ele.name === list[rand]
        })
        this.fnWrite(menuData)   
    },
    fnWrite(menuData){
        const target = Object.assign({}, menuData.data);
        const index = this.fnRand(Object.keys(target))        
        const menu = target[index].name
        const kcal = target[index].Cal

        document.getElementById('menu').innerText = menu
        document.getElementById('Cal').innerText = `${kcal} 칼로리`

    }        
  }
}
</script>
<style scoped>
.cb {
	width: 50px;
	height: 50px;
    border: 2px solid #e98686;
    border-radius: 5px;
    display: inline-block;	
    box-sizing: border-box;
	cursor: pointer;
    vertical-align: middle;    
    /* padding: 3% 1% 1% 1%; */
    margin-left: 2px;        
    line-height: 50px;
}
.cb2 {
	width: 50px;
	height: 50px;
    border: 2px solid #e98686;
    border-radius: 5px;
    display: inline-block;	
    box-sizing: border-box;
	cursor: pointer;
    vertical-align: middle;    
    /* padding: 1% 1% 1% 1%; */
    margin-left: 2px;    
}
input[type="checkbox"]:checked + label {
    border-color: #034b07;
    font-weight: bold;
    background: #e57a7a;
    color: white;    
    /* #34b93d */
}
input[type="checkbox"] {
	display: none;
}
</style>
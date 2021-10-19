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
                <div id="test" class="result-coin-changed">             
                    <p class="result-coins rst-up">메뉴명: <span class="" id="menu"></span></p>       
                    <p class="result-coins rst-up">칼로리: <span class="" id="kcal"></span></p>
                    
                </div>                
                <div class="" style="margin-top: 3%;">
                    <input type="checkbox" id="cbbob" name="chk" value="밥"/>
                    <label for="cbbob" class="cb">밥</label>
                    <input type="checkbox" id="cbmyun" name="chk" value="면"/>
                    <label for="cbmyun" class="cb">면</label>       
                    <input type="checkbox" id="cbt" name="chk" value="튀긴거"/>
                    <label for="cbt" class="cb">튀긴거</label>     
                    <input type="checkbox" id="cbg" name="chk" value="구운거"/>
                    <label for="cbg" class="cb">구운거</label>   
                    <input type="checkbox" id="cbn" name="chk" value="날거"/>
                    <label for="cbn" class="cb">날거</label>      
                    <input type="checkbox" id="cbj" name="chk" value="찌개"/>
                    <label for="cbj" class="cb">찌개</label>     
                    <input type="checkbox" id="cbb" name="chk" value="빵"/>
                    <label for="cbb" class="cb">빵</label>                                                                                              
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
        datas:{
            "밥": [{
                "name": "김치찌깨",
                "kcal": "420"                
            }],  
            "면": [{
                "name": "김치찌깨",
                "kcal": "420"                
            }],
            "찌개": [{
                "name": "김치찌깨",
                "kcal": "420"                
            }],
            "튀긴거": [{
                "name": "김치찌깨",
                "kcal": "420"                
            }],    
            "구운거": [{
                "name": "김치찌깨",
                "kcal": "420"                
            }],    
            "날거": [{
                "name": "김치찌깨",
                "kcal": "420"                
            }],  
            "빵": [{
                "name": "김치찌깨",
                "kcal": "420"                
            }]                                                                        
        },
        foods: [
            {name: '밥', data: [
                {"name":"볶음밥", 'kcal':"222"},
                {"name":"비빔밥", 'kcal':"222"},
                {"name":"오므라이스", 'kcal':"222"},
                {"name":"제육덮밥", 'kcal':"222"},
                {"name":"오징어덮밥", 'kcal':"222"},
            ]},
            {name: '면', data: [
                {"name":"", 'kcal':""}
            ]},
            {name: '찌개', data: [
                {"name":"", 'kcal':""}
            ]},
            {name: '튀긴거', data: [
                {"name":"", 'kcal':""}
            ]},
            {name: '구운거', data: [
                {"name":"", 'kcal':""}
            ]},
            {name: '날거', data: [
                {"name":"", 'kcal':""}
            ]},
            {name: '빵', data: [
                {"name":"", 'kcal':""}
            ]},                                                            
        ]          
      }      
  },
  mounted(){
      this.fnInit()
  },
  methods:{
    fnInit(){
        // const open = () => {
        //     document.querySelector(".modal").classList.remove("hidden");
        //     console.log('open');
        // }
        // const close = () => {
        //     document.querySelector(".modal").classList.add("hidden"); 
        // } 


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

        // document.querySelector(".open-btn").addEventListener("click",open);
        // document.querySelector(".modal").addEventListener("click",close);
        // document.querySelector(".bg").addEventListener("click",close);      
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
//     setTimeout(function() {
//         $('.loading-img').hide();
//         $('.loading-text').hide();
//         $('.location').hide();
//         $('.replay').show();
//         $('.result-coin').show();
//         $('.content-explanation').show();
//         $('.result-img').show();
//         $('.result-coin-changed').show()
//     },2000);    




//     const coinShow = document.querySelector(".result-coin");
//     const price = document.querySelector(".result-coin-tradeprice")
//     const signed = document.querySelector(".result-coin-signedchange")
//     const high = document.querySelector(".result-coin-highprice")
//     const low = document.querySelector(".result-coin-lowprice")

//     let css = document.getElementsByClassName("result-coin-changed")
//     let cls = 'coin-up'              

//     $(css).addClass("up")
//     if(parseFloat((data[0].signed_change_rate * 100)) < 0){
//         cls = 'coin-down'
//         $(css).removeClass("up").addClass("down")
//     }

//     coinShow.innerText = upbits.korean_name;
//     price.innerText = data[0].trade_price.toLocaleString()
//     signed.innerText = `${(data[0].signed_change_rate * 100).toFixed(2).toLocaleString()}%`
//     high.innerText = data[0].high_price.toLocaleString()
//     low.innerText = data[0].low_price.toLocaleString()      


        const target = Object.assign({}, menuData.data);
        console.log(target[this.fnRand(Object.keys(target))].name)   
        console.log(target[this.fnRand(Object.keys(target))].kcal)   


        document.getElementById('menu').innerText = target[this.fnRand(Object.keys(target))].name
        document.getElementById('kcal').innerText = `${target[this.fnRand(Object.keys(target))].kcal}kcal`

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
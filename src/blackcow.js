const init = () =>{
    // document.getElementsByClassName('.replay').style.display="none"
    
    // $('.replay').hide();
    // $('.content-explanation').hide();
    // $('.result-img').hide();
    // $('.loading-img').hide();
    // $('.loading-text').hide();
    // $('.loading-text').hide();
    // $('.result-coin-changed').hide();
}

// const clickEvent = () => {
//     $('.content-text').hide();
//     $('.click-img').hide();
//     $('.result-coin').hide();
//     $('.click-text').hide();

//     $('.loading-img').show();
//     $('.loading-text').show();
//     $('.loading-text').show();

//     call("https://api.upbit.com/v1/market/all")

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
// }

// const call = (url, type = 'arr') => {
//     try{
//         $.ajax({ 
//             url: url,         
//             data: '',         
//             method: "GET",         
//             dataType: "json",
//             async: false,
//             success:function(data) {                
//                 if(type === 'arr'){
//                     coins(data)
//                 }
//                 else{
//                     random(data)
//                 }                
//             },
//             error:function(){
//                 alert("흑우가 사라졌어요 다시 ㄱㄱ")
//             }
//         })
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// const index = (length) => {
//     return Math.floor(Math.random() * length)
// }

// const coins = async (data) => {
//     const makretList = await marketFilter(data);
//     const upbitList = await marketMap(makretList);
//     upbits = await marketFind(makretList, upbitList)
//     let url = `https://api.upbit.com/v1/ticker?markets=${upbits.market}`     
//     call(url, 'random')
// }


// const marketFilter = (data) => {
//     return new Promise((resolve, reject) => {
//         resolve(data.filter((ele) => {
//             return ele.market.substr(0,3) === 'KRW'  
//         }));
//     });
// }

// const marketMap = (data) => {
//     return new Promise((resolve, reject) => {
//         resolve(data.map(e => e.korean_name));
//     });    
// }

// const marketFind = (m, u) => {
//     let idx = index(u.length)
//     return new Promise((resolve, reject) => {
//         resolve(m.find((e) => {
//             return e.korean_name === u[idx]
//         }))
//     })  
// }


// const random = (data) =>{
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
// }


init()







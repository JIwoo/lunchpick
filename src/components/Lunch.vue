<template>
<header>
    <h3>오징어게임</h3>
    <div>
      <ul>
        <li class="page"><a href="../html/index.html">촬영지</a></li>
        <li><a href="../html/character.html">등장인물</a></li>
        <li><a href="../html/news.html">뉴스</a></li>
      </ul>
      <img src="https://m.lovinheal.com/web/upload/roma/img/side_myshop.png">
    </div>
  </header>

  <section class="title">
    <div class="search_title">
      <h1>검색 및 리스트</h1>
      <p>결과 0개</p>
    </div>
    <ul class="tab">
      <li class="current" data-tab="tab1"><a href="#"><img src="https://www.pngkey.com/png/full/208-2083110_list-icon-png-data-list-icon.png"></a></li>
      <li data-tab="tab2"><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/685/685655.png"></a></li>
      <li data-tab="tab3"><a href="#"><img src="https://kr.seaicons.com/wp-content/uploads/2015/06/Maps-Geo-Fence-icon.png"></a></li>
    </ul>
  </section>

  <section class="content">
    <div class="search">
      <input type="text" placeholder="지역 또는 장소를 검색해주세요." />
      <select name="state">
        <option value=" ">지역</option>
        <option>서울</option>
        <option>의정부</option>
        <option>구리</option>
        <option>김포</option>
        <option>파주</option>
      </select>
      <button>검색</button>
    </div>

    <div id="tab1" class="tabcontent current">
      <!--리스트 없을시
      <p class="no_list">검색어를 입력하거나 지역을 선택해주세요.</p>-->
      <!--리스트 있을시-->
      <table>
        <colgroup>
          <col width="30%">
          <col width="25%">
          <col width="50%">
        </colgroup>
        <thead>
          <tr>
            <th>명칭</th>
            <th>지역</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ㅇㅇㅇ세트장</td>
            <td>서울</td>
            <td>서울 강서구 xxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>ㅇㅇㅇ세트장</td>
            <td>서울</td>
            <td>서울 강서구 xxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>ㅇㅇㅇ세트장</td>
            <td>서울</td>
            <td>서울 강서구 xxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>ㅇㅇㅇ세트장</td>
            <td>서울</td>
            <td>서울 강서구 xxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>ㅇㅇㅇ세트장</td>
            <td>서울</td>
            <td>서울 강서구 xxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>ㅇㅇㅇ세트장</td>
            <td>서울</td>
            <td>서울 강서구 xxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>ㅇㅇㅇ세트장</td>
            <td>서울</td>
            <td>서울 강서구 xxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>ㅇㅇㅇ세트장</td>
            <td>서울</td>
            <td>서울 강서구 xxxxxxxxxxxxxxx</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="tab2" class="tabcontent">
      <!--리스트 없을시
      <p class="no_list">검색어를 입력하거나 지역을 선택해주세요.</p>-->
      <!--리스트 있을시-->
      <div class="box_content">
        <div>
          <img src="https://img6.yna.co.kr/etc/inner/KR/2021/10/01/AKR20211001159000005_03_i_P2.jpg">
          <ul>
            <li>
              <h4>달고나게임 놀이터 세트장 <span>서울</span></h4>
              <h5>서울 강서구 xxxxxxxxxxxxxxx</h5>
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/254/254442.png" class="link">
            </li>
          </ul>
        </div>
        <div>
          <img src="https://menu.mt.co.kr/moneyweek/thumb/2021/09/24/06/2021092415578022716_1.jpg">
          <ul>
            <li>
              <h4>계단 세트장 <span>서울</span></h4>
              <h5>서울 강서구 xxxxxxxxxxxxxxx</h5>
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/254/254442.png" class="link">
            </li>
          </ul>
        </div>
        <div>
          <img src="https://photo.hankooki.com/newsphoto/v001/2021/09/25/dyhero21320210925165836_O_03_C_1.jpg">
          <ul>
            <li>
              <h4>게임시작 세트장 <span>서울</span></h4>
              <h5>서울 강서구 xxxxxxxxxxxxxxx</h5>
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/254/254442.png" class="link">
            </li>
          </ul>
        </div>
        <div>
          <img src="http://www.gukjenews.com/news/photo/202109/2315535_2305741_2815.jpg">
          <ul>
            <li>
              <h4>무궁화꽃이피었습니다 세트장 <span>서울</span></h4>
              <h5>서울 강서구 xxxxxxxxxxxxxxx</h5>
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/254/254442.png" class="link">
            </li>
          </ul>
        </div>
        <div>
          <img src="https://img.wowtv.co.kr/wowtv_news/dnrs/20210925/B20210925125634050.jpg">
          <ul>
            <li>
              <h4>오징어게임 세트장 <span>서울</span></h4>
              <h5>서울 강서구 xxxxxxxxxxxxxxx</h5>
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/254/254442.png" class="link">
            </li>
          </ul>
        </div>
        <div>
          <img src="https://img6.yna.co.kr/etc/inner/KR/2021/10/01/AKR20211001159000005_03_i_P2.jpg">
          <ul>
            <li>
              <h4>달고나게임 놀이터 세트장 <span>서울</span></h4>
              <h5>서울 강서구 xxxxxxxxxxxxxxx</h5>
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/254/254442.png" class="link">
            </li>
          </ul>
        </div>
        <div>
          <img src="https://photo.hankooki.com/newsphoto/v001/2021/09/25/dyhero21320210925165836_O_03_C_1.jpg">
          <ul>
            <li>
              <h4>게임시작 세트장 <span>서울</span></h4>
              <h5>서울 강서구 xxxxxxxxxxxxxxx</h5>
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/254/254442.png" class="link">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="tab3" class="tabcontent">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50626.543879496196!2d126.87285304069518!3d37.52774922117184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9ede2e2b5fdf%3A0x2cc5aadb528c2b21!2z64yA7Iq57KeA64-E!5e0!3m2!1sko!2skr!4v1634491116735!5m2!1sko!2skr"
        style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </section>


</template>

<script>
require('@/assets/css/main.css')
export default {
  name: 'Lunch',
  props: {
    msg: String
  }
}
</script>

// πnavν­
$(".tabButton").hover(function () {
  $(this).toggleClass("on").children('.tabBox').stop(true).slideToggle(300);
  $(".tabButton").not(this).removeClass('on').stop(true).children('.tabBox').slideUp(300);
});



// πμ μ²΄λ©λ΄

$(".menu").click(function () {
  $(".gnb").toggleClass("all");
  $(".tabBox").slideToggle();
  $(this).text(function (e, text) {
    return text === 'close' ? 'menu' : 'close';
  });
});


// πμ§λ
var mapContainer = document.getElementById('map'), // μ§λλ₯Ό νμν  div  
    mapOption = { 
        center: new kakao.maps.LatLng(36.7853074, 127.5814886), // μ§λμ μ€μ¬μ’ν
        level: 8 // μ§λμ νλ λ λ²¨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // μ§λλ₯Ό μμ±ν©λλ€
 
// λ§μ»€λ₯Ό νμν  μμΉμ λ΄μ©μ κ°μ§κ³  μλ κ°μ²΄ λ°°μ΄μλλ€ 
var positions = [
    {
        content: `
        <img src="/images/μ’κ΅¬μ°μ²λ¬Έλ.jpg">
        <h2>μ’κ΅¬μ°μ²λ¬Έλ</h2>
        <ul class="content">
            <li>κ΅­λ΄μμ κ°μ₯ ν° 365mm κ΅΄μ λ§μκ²½μ΄ μ€μΉλμ΄ μ²μ²΄λ€μ μμν λͺ¨μ΅μ μ§μ  λ³Ό μ μμ΅λλ€.<br> λ μ¨μ μκ΄μμ΄ λ€μν μ²λ¬Έ μ°μ£Όμ»¨νμΈ λ₯Ό κ΄λ ν  μ μκ³ , λ€μν μ μλ μ²΄νν  μ μμ΅λλ€.</li>
            <li>μ΄μμκ° : </li>
            <li>μμμΌν΄λ¬΄,κ³΅ν΄μΌν΄λ¬΄</li>
            <li>λμ κΈ°(11μ~3μ) 10:00 ~ 21:00</li>
            <li>νμ κΈ°(4μ~10μ) 10:00 ~ 22:00</li>
        </ul>
        `, 
        latlng: new kakao.maps.LatLng(36.7103022,127.6491052)
    },
    {
        content: `
        <img src="/images/μ’κ΅¬μ°κ΅¬λ¦λ€λ¦¬.jpg">
        <h2>μ’κ΅¬μ°λͺμκ΅¬λ¦λ€λ¦¬</h2>
        <ul class="content">
            <li>μ’κ΅¬μ° ν΄μλλμ λλλ§ν¬ λͺμκ΅¬λ¦λ€λ¦¬ λͺμκ΅¬λ¦λ€λ¦¬λ 230mκΈΈμ΄μ νλ€λ€λ¦¬μλλ€.
            </li>
        </ul>
        `,
        latlng: new kakao.maps.LatLng(36.7054168,127.6511754)
    },
    {
        content: `
        <img src="/images/κ±°λΆμ΄λ°μμ μ.jpg">
        <h2>κ±°λΆμ΄λ°μμ μ</h2>
        <ul class="content">
            <li>λ³μ£ΌλΆμ μ νλ§λ‘ νλ― κ΅¬μ±λ κ³΅μ!</li>
        </ul>
        `, 
        latlng: new kakao.maps.LatLng(36.7054168, 127.6511754)
    },
    {
        content: `
        <img src="/images/μμ κ±°κ³΅μ.jpg">
        <h2>μ¦νμμ κ±°κ³΅μ</h2>
        <ul class="content">
            <li>μ¦νμ λ¨νμ©κ°λ‘ 16μ μ¦νμμ κ±°κ³΅μκ³Ό μ΄λ¦°μ΄μμ κ±°κ΅ν μμ κ΅μ‘μ₯μ΄ μμ΅λλ€.</li>
        </ul>
        `,
        latlng: new kakao.maps.LatLng(36.7671278, 127.6044431)
    },
    {
      content: `
      <img src="/images/κΉλμ λ¬Ένκ΄.jpg">
      <h2>κΉλμ λ¬Ένκ΄</h2>
      <ul class="content">
          <li>μ¦νμ μμΈ!<br>λμμΈλ€μ κ·κ°μ΄ λλ κΉλμ μ κΈ°λ¦¬λ λ¬Ένκ΄
          </li>
          <li>μ΄μμκ° : </li>
          <li>μμμΌμ κΈ°ν΄λ¬΄, 09:00 ~ 18:00
          </li>
      </ul>
      `, 
      latlng: new kakao.maps.LatLng(36.7895872, 127.5800624)
  },
  {
    content: `
    <img src="/images/λ³΄κ°μ².jpg">
    <h2>λ³΄κ°μ²λ―Έλ£¨λλ¬΄μ²</h2>
    <ul class="content">
        <li>λ³΄κ°μ²λ³μ μ²μ΄ μ‘°μ±μ΄ λμ΄μκ³ , λ΅λ΅ν μΆμ μ¬μ λ₯Ό μ€λ§ν κ³³μλλ€.
        </li>
    </ul>
    `, 
    latlng: new kakao.maps.LatLng(36.7895872, 127.5800624)
},
{
  content: `
  <img src="/images/μ€μΌμ₯.jpg">
  <h2>μ₯λ°μμ₯ μ€μΌμ₯</h2>
  <ul class="content">
      <li>μ¬νμ λΉ μ§μ μλ λ¨Ήκ±°λ¦¬!<br>1μΌ, 6μΌμλ§ λ§λ  μ μλ μ€μΌμ₯ μ±μ±νκ³  μ λ ΄ν λμμ°μνκ³Ό λ§μλ λ¨Ήκ±°λ¦¬λ₯Ό μ¦κΈΈ μ μμ΄μ.
      </li>
  </ul>
  `, 
  latlng: new kakao.maps.LatLng(36.7818446, 127.5808526)
},
{
  content: `
  <img src="/images/μ°μμ§μ§μνκ³΅μ.jpg">
  <h2>μ°μμ§μ§μνκ³΅μ</h2>
  <ul class="content">
      <li>κ΄΄μ μ μμ§ μ£Όλ³ νλ§κ° μλ κ³΅μ λ€μν μ§μ§κ΄μ°°κ³Ό μΆλ λ€λ¦¬ κ·Έλ¦¬κ³  μ λ§λκΉμ§!
      </li>
  </ul>
  `, 
  latlng: new kakao.maps.LatLng(36.8357272, 127.5941132)
},
{
  content: `
  <img src="/images/λ²¨ν¬λ .jpg">
  <h2>λ²¨ν¬λ </h2>
  <ul class="content">
      <li>λͺ¨λκ° μ¦κΈΈ μ μλ λ μ λ¨μ§!<br>μ£Όμ μμ€λ‘λ κ³¨νμ₯,λ£¨μ§,λλ¬Όμ²΄νλͺ©μ₯ λ±μ΄ μμ΅λλ€.
      </li>
      <li>μ΄μμκ° : </li>
      <li>μμ€λ§λ€ λ€λ¦(ννμ΄μ§ μ°Έκ³ )
      </li>
  </ul>
  `, 
  latlng: new kakao.maps.LatLng(36.8451871, 127.5832282)
}
];

for (var i = 0; i < positions.length; i ++) {
    // λ§μ»€λ₯Ό μμ±ν©λλ€
    var marker = new kakao.maps.Marker({
        map: map, // λ§μ»€λ₯Ό νμν  μ§λ
        position: positions[i].latlng // λ§μ»€μ μμΉ
    });

    // λ§μ»€μ νμν  μΈν¬μλμ°λ₯Ό μμ±ν©λλ€ 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // μΈν¬μλμ°μ νμν  λ΄μ©
    });

    // λ§μ»€μ mouseover μ΄λ²€νΈμ mouseout μ΄λ²€νΈλ₯Ό λ±λ‘ν©λλ€
    // μ΄λ²€νΈ λ¦¬μ€λλ‘λ ν΄λ‘μ λ₯Ό λ§λ€μ΄ λ±λ‘ν©λλ€ 
    // forλ¬Έμμ ν΄λ‘μ λ₯Ό λ§λ€μ΄ μ£Όμ§ μμΌλ©΄ λ§μ§λ§ λ§μ»€μλ§ μ΄λ²€νΈκ° λ±λ‘λ©λλ€
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// μΈν¬μλμ°λ₯Ό νμνλ ν΄λ‘μ λ₯Ό λ§λλ ν¨μμλλ€ 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// μΈν¬μλμ°λ₯Ό λ«λ ν΄λ‘μ λ₯Ό λ§λλ ν¨μμλλ€ 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}






// //πgif
// <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_5i5tlydx.json"  background="transparent"  speed="2"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>


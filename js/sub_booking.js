// ðnaví­
$(".tabButton").hover(function () {
  $(this).toggleClass("on").children('.tabBox').stop(true).slideToggle(300);
  $(".tabButton").not(this).removeClass('on').stop(true).children('.tabBox').slideUp(300);
  // e.preventDefault();
  // e.stopPropagation();
  // return false;
});



// ðì ì²´ë©ë´

$(".menu").click(function () {
  $(".gnb").toggleClass("all");
  $(".tabBox").slideToggle();
  // e.preventDefault();
  // e.stopPropagation();
  $(this).text(function (e, text) {
    return text === 'close' ? 'menu' : 'close';
  });
});

// ðê³µì§ì¬í­ë²í¼
$(".chk button").click(function () {
  var tabindex = $(this).index();
  // console.log(tabindex);
  $(this).addClass('on').siblings().removeClass('on');
  // $(".eventDate").eq(tabindex).addClass('on').siblings().removeClass('on');
});
$(".chk button").eq(0).trigger('click');


//ðë¬ë ¥
window.onload = function () { buildCalendar(); };    // ì¹ íì´ì§ê° ë¡ëëë©´ buildCalendar ì¤í

let nowMonth = new Date();  // íì¬ ë¬ì íì´ì§ë¥¼ ë¡ëí ë ì ë¬ë¡ ì´ê¸°í
let today = new Date();     // íì´ì§ë¥¼ ë¡ëí ë ì§ë¥¼ ì ì¥
today.setHours(0, 0, 0, 0);    // ë¹êµ í¸ìë¥¼ ìí´ todayì ìê°ì ì´ê¸°í

// ðë¬ë ¥ ìì± : í´ë¹ ë¬ì ë§ì¶° íì´ë¸ì ë§ë¤ê³ , ë ì§ë¥¼ ì±ì ë£ëë¤.
function buildCalendar() {

  let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // ì´ë²ë¬ 1ì¼
  let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // ì´ë²ë¬ ë§ì§ë§ë 

  let tbody_Calendar = document.querySelector(".Calendar > tbody");
  document.getElementById("calYear").innerText = nowMonth.getFullYear();             // ì°ë ì«ì ê°±ì 
  document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // ì ì«ì ê°±ì 

  while (tbody_Calendar.rows.length > 0) {                        // ì´ì  ì¶ë ¥ê²°ê³¼ê° ë¨ììë ê²½ì° ì´ê¸°í
    tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
  }

  let nowRow = tbody_Calendar.insertRow();        // ì²«ë²ì§¸ í ì¶ê°           

  for (let j = 0; j < firstDate.getDay(); j++) {  // ì´ë²ë¬ 1ì¼ì ìì¼ë§í¼
    let nowColumn = nowRow.insertCell();        // ì´ ì¶ê°
  }

  for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // dayë ë ì§ë¥¼ ì ì¥íë ë³ì, ì´ë²ë¬ ë§ì§ë§ë ê¹ì§ ì¦ê°ìí¤ë©° ë°ë³µ  

    let nowColumn = nowRow.insertCell();        // ì ì´ì ì¶ê°íê³ 


    let newDIV = document.createElement("p");
    newDIV.innerHTML = leftPad(nowDay.getDate());        // ì¶ê°í ì´ì ë ì§ ìë ¥
    nowColumn.appendChild(newDIV);

    if (nowDay.getDay() == 6) {                 // í ìì¼ì¸ ê²½ì°
      nowRow = tbody_Calendar.insertRow();    // ìë¡ì´ í ì¶ê°
    }

    if (nowDay < today) {                       // ì§ëë ì¸ ê²½ì°
      newDIV.className = "pastDay";
      //í´ë¦­ì´ë²¤í¸ ë§ê¸° ì¶ê°
    }
    else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // ì¤ëì¸ ê²½ì°           
      newDIV.className = "today";
      newDIV.onclick = function () { choiceDate(this); };
    }
    else {                                      // ë¯¸ëì¸ ê²½ì°
      newDIV.className = "futureDay";
      newDIV.onclick = function () { choiceDate(this); };
    }
  }
}

// ðë ì§ ì í

function choiceDate(newDIV) {
  var choiceDay = document.querySelectorAll(".choiceDay");
  var yyyy = document.querySelector('#calYear').textContent;
  var mm = document.querySelector('#calMonth').textContent;
  var dd = newDIV.textContent;
  var chkDay = `${yyyy}ë ${mm}ì ${dd}ì¼`;
  if (document.getElementsByClassName("choiceDay")[1]) {
    // console.log(choiceDay.length);// ì´ê¸°í ë ë
    choiceDay.forEach((element) => {
      element.classList.remove('choiceDay');            //ì íë ë ì§ ì¼ê´ ì­ì 
      // $('checkIn').remove;
      // element.remove('chkDay');
    });
  }
  else if (document.getElementsByClassName("choiceDay")[0]) {
    // console.log(choiceDay.length);//ì²´í¬ìì ì°ìë
    newDIV.parentNode.classList.add("choiceDay");
    checkOut.innerText = chkDay;
  } else {
    newDIV.parentNode.classList.add("choiceDay");           // ì íë ë ì§(td)ì "choiceDay" class ì¶ê°
    // console.log(choiceDay.length);//ì²´í¬ì¸ ì°ìë
    checkIn.innerText = chkDay;
  }

}


// ðì´ì ë¬ ë²í¼ í´ë¦­
function prevCalendar() {
  nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // íì¬ ë¬ì 1 ê°ì
  buildCalendar();    // ë¬ë ¥ ë¤ì ìì±
}
// ðë¤ìë¬ ë²í¼ í´ë¦­
function nextCalendar() {
  nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // íì¬ ë¬ì 1 ì¦ê°
  buildCalendar();    // ë¬ë ¥ ë¤ì ìì±
}

// inputê°ì´ íìë¦¬ ì«ìì¸ ê²½ì° ìì '0' ë¶íì£¼ë í¨ì
function leftPad(value) {
  if (value < 10) {
    value = "0" + value;
    return value;
  }
  return value;
}


//ðê°ì¤ json
$.ajax({
  type: "GET",
  url: "js/sub_booking_pay.json",
  dataType: "json",
  success: function (data) {
    var elem = "";
    $.each(data, function (index, obj) {
      // thisë ê° objë¥¼ ìë¯¸íë¤.
      elem += `<div class="roomImg">`;
      elem += `<img src='${this.img}' alt='${this.name}'>`;
      // elem += `<a>${this.link}</a>`;
      elem += `</div>`;
      elem += `<div class="detail">`;
      elem += `<p>${this.name}</p>`;
      elem += `<p>${this.people}</p>`;
      elem += `<p>${this.option}</p>`;
      elem += `<p>ì/í´ì¤ìê° : ${this.time}</p>`;
      elem += `<button>${this.button}</button>`;
      elem += `<div class="price">ê°ê²© : 
      <span>(íì¼)<span class="dayPrice">${this.dayPrice}</span><span>
      <span>(ì£¼ë§)<span class="weekPrice">${this.weekPrice}</span><span>
      <span>(ì±ìê¸°)<span class="peak">${this.peak}</span><span>
      </div>`;
      elem += `</div>`;
    });
    $(".room").append(elem);
    $(".detail button").on("click", function () {

      let chkIn = checkIn.textContent;
      let chkOut = checkOut.textContent;
      let chkInDay = chkIn.replace("ë ", "-").replace("ì ", "-").replace("ì¼", "");
      let chkOutDay = chkOut.replace("ë ", "-").replace("ì ", "-").replace("ì¼", "");
      let calcDay = getDateDiff(chkOutDay, chkInDay);
      let dayPrice = this.nextSibling.childNodes[1].childNodes[1].textContent;
      let total = `${calcDay * dayPrice} ì`;
      // let total = `${calcDay * dayPrice}`;
      totalAmount.innerText = total;


//       const price = "total"; // <- String Type
// // const price = total; // <- String Type
// const format = Number(price).toLocaleString();
// console.log(format);
    });
  },
  error: function (xhr) {
    console.log(xhr.status + "/" + xhr.errorText);
  }
});

//ð ë ì§ì°¨ì´ êµ¬íê¸°
const getDateDiff = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffDate = date1.getTime() - date2.getTime();
  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // ë°ë¦¬ì¸ì»¨ * ì´ * ë¶ * ì = ì¼
};

//ì½¤ë§ íì
const price = "total"; // <- String Type
// const price = total; // <- String Type
const format = Number(price).toLocaleString();
console.log(format);










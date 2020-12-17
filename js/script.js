// 宣告 DOM
let bmiText = document.querySelector('#bmiText');
bmiText.style.display="none";

//事件點擊按鈕 
let btn = document.querySelector('#addAppendant');
let reset = document.querySelector('#clearAppendant');

//事件點擊鍵盤
const inputk = document.querySelectorAll('input');

//計算 BMI
function bmi(weight, height){
 let w = parseInt(weight);
 let h = parseInt(height) / 100; //因為公分要轉公尺，因此除以 100
 let bmi = (w / (h * h)).toFixed(2); //toFixed 讓小數點四捨五入到第二位
 return bmi; 
}
function BFbmi(weight, height, age, sex){
    var w = parseInt(weight);
    var h = parseInt(height) / 100;
    var bmi = (w / (h * h)).toFixed(2);
    var Rbmi = parseInt(bmi);
    var a = parseInt(age);
    var s = parseInt(sex);
    var BFbmi = (1.2 * Rbmi) + (0.23 * a - 5.4) - (10.8 * s);
    return BFbmi;
}

// 取出輸入值寫入畫面
function calculateBMI(e){
   console.log(e);
  let bodyWeight = document.querySelector('#appendantWeight').value;
  let bodyHeight = document.querySelector('#appendantHeight').value;
  let bodyAge = document.querySelector('#appendantAge').value;
  let bodySex = document.querySelector('#appendantSex').value;
  let resultText = document.querySelector('#resultText');
  let BFresultText = document.querySelector('#BFresultText');
  let bmiText = document.querySelector('#bmiText');
  //  印出值來
  if((bodyWeight !="" ) && (bodyHeight != "") && (bodyAge != "") && (bodySex != "")){
  
     bmiText.style.display = "block";
     resultText.innerHTML = bmi(bodyWeight,bodyHeight);
     bmiText.innerHTML =  checkBMI(bmi(bodyWeight,bodyHeight));
     BFresultText.innerHTML = BFbmi(bodyAge, bodySex);
    
  }else{
      bmiText.style.display="none";
      alert("請輸入身高體重！");
      return;
  };

}



//  bmi 範圍
function checkBMI(bmi){
 
    if( bmi < 18.5){
    return "體重過輕"
    }else if( bmi >=18.5 &&  bmi < 24){
    return "體重正常"
    }else if( bmi >=24 &&  bmi < 27){
    return "過重"
    }else if( bmi >=27 &&  bmi < 30){
    return "輕度肥胖"
    }else if( bmi >=30 &&  bmi < 35){
    return "中度肥胖"
    }else if( bmi  >=35){
    return "重度肥胖"
    }
  
 
}
//清空值
function undo(e){
 document.querySelector('#appendantWeight').value ='';
 document.querySelector('#appendantHeight').value ='';
 bmiText.style.display="none";
 resultText.innerHTML = 0;
 return
}

//事件監聽
btn.addEventListener('click', calculateBMI);
reset.addEventListener('click',undo);
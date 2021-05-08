//キーコードを格納する配列
const kcode = [65,66,67,68,69,70,71,72,73,
    74,75,76,77,78,79,80,81,82,
    83,84,85,86,87,88,89,90];
//問題の単語を格納する配列
const quest = ["苧麻","畷","弥縫","鷹揚","払拭","斡旋","砥礪","鈍色","此岸","牝馬","鹿毛","菅笠","砧",];
const ans = ["ちょま","なわて","びほう","おうよう","ふっしょく","あっせん","しれい","にびいろ","しがん","ひんば","かげ","すげがさ","きぬた"];

//問題数だけの乱数を格納する配列
let rnd = new Array();

//グローバル変数群
let mondai = "";
let cnt = 0;

//問題数分の乱数を生成
function ransu() {
for(let i = 0; i < quest.length ; i++ ) {
rnd[i] = Math.floor(Math.random() * quest.length);
}
}

//1回目の出題のセットアップ
function gameSet() {
let mondai = "";
cnt = 0;
ransu();

mondai = quest[rnd[cnt]];
document.getElementById("waku").innerHTML = mondai;
}

//2回目以降の出題
function gameCnt() {
document.getElementById("Cnt").disabled = true;

mondai = quest[rnd[cnt]];
document.getElementById("waku").innerHTML = mondai;

//全問解いたかの確認
if(cnt === quest.length) {
document.getElementById("waku").innerHTML = "終了！お疲れさまでした！" 
document.getElementById("Ans").disabled = true;
}
}

//ユーザの回答を確認する
function ansId() {
document.getElementById("Cnt").disabled = false;
if(document.F1.inpAns.value === ans[rnd[cnt]]) {
document.getElementById("waku").innerHTML = "正解！";
} else {
document.getElementById("waku").innerHTML = `不正解…　正解は「${ans[rnd[cnt]]}」です！`;
}
cnt++;
}

//エンターキーを回答ボタンとする
function enter() {
document.getElementById("a").textContent = "a";
return false;
}

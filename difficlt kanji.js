    //キーコードを格納する配列
    const kcode = [65,66,67,68,69,70,71,72,73,
        74,75,76,77,78,79,80,81,82,
        83,84,85,86,87,88,89,90];
    //問題の単語を格納する配列
    const quest = ["苧麻","畷","弥縫","鷹揚","払拭","斡旋","砥礪","鈍色","此岸","牝馬","鹿毛","菅笠","砧",];
    const ans = ["ちょま","なわて","びほう","おうよう","ふっしょく","あっせん","しれい","にびいろ","しがん","ひんば","かげ","すげがさ","きぬた"];

    //問題数だけの乱数を格納する配列
    let rnd;

    //グローバル変数群
    let mondai = "";
    let cnt = 0;

    //問題数分の乱数を生成
    function generateRondomNumber(index) {
        rand = Math.floor(Math.random() * quest.length);
        while(true){
            if(index.every(x => x != rand)){
                index = index.push(rand);
                return rand;
            }
        //}else{
        //    return generateRondomNumber(index);
            rand = (rand+1)%index.length;
        }
        return 0;
    }

    //1回目の出題のセットアップ
    function gameSet() {
        document.getElementById("textbox").disabled = false;
        document.getElementById("Cnt").disabled = true;
        document.getElementById("Ans").disabled = false;
        let mondai = "";
        usedquest = [];
        cnt = 0;
        rnd = generateRondomNumber(usedquest);

        mondai = quest[rnd];
        document.getElementById("waku").innerHTML = mondai;
    }

    //2回目以降の出題
    function gameCnt() {
        document.getElementById("textbox").value = "";
        document.getElementById("Cnt").disabled = true;
        document.getElementById("Ans").disabled = false;

    //全問解いたかの確認
    if(cnt === quest.length) {
        document.getElementById("waku").innerHTML = "終了！お疲れさまでした！" 
        document.getElementById("textbox").disabled = true;
        document.getElementById("Cnt").disabled = true;
        document.getElementById("Ans").disabled = true;
        return;
        }
        rnd = generateRondomNumber(usedquest);
        mondai = quest[rnd];
        document.getElementById("waku").innerHTML = mondai;
    }

    //ユーザの回答を確認する
    function ansId() {
        document.getElementById("Cnt").disabled = false;
        document.getElementById("Ans").disabled = true;
        if(document.F1.inpAns.value === ans[rnd]) {
                document.getElementById("waku").innerHTML = "正解！";
            } else {
                document.getElementById("waku").innerHTML = `不正解…　正解は「${ans[rnd]}」です！`;
            }
            console.log(usedquest)//debug用
            cnt++;
        }

    //エンターキーを回答ボタンとする
    function enter() {
        return false;
    }

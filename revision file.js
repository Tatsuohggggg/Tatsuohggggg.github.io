let rnd = new Array();
//問題数分の乱数を生成
function ransu() {
    for(let i = 0; i < 100 ; i++ ) {
        rnd[i] = Math.floor(Math.random() * 100);
    }
    rnd.sort();
    console.log(rnd);
}
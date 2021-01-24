//①if文を使用する
//②leapYearという関数を使用する
//③引数に西暦を渡す
//④返り値を使用する
//⑤結果はコンソールに出力する

//※うるう年は以下のように定義されます。
//①西暦が4で割り切れるかつ100で割り切れない
//②西暦が400で割り切れる//

function leapYear(year) {
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    return "うるう年です";
  } else {
    return "うるう年ではありません";
  }
}

console.log(leapYear(2030));
console.log(leapYear(2400));
console.log(leapYear(2033));




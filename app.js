let laptop = {
  price: 105000000,
  off_new: function (sellprice) {
    this.off_new = (sellprice * 100) / 105000000;
    this.off_new = Math.round(this.off_new);
    if (sellprice == this.price) console.log("No OFF!");
    else console.log("OFF percent is:");
    console.log(100 - this.off_new);
  },
  sell: 70,
  max_sell: 100,
  sell_percent: function () {
    this.sell_percent = (this.sell * 100) / 100;
    console.log(this.sell_percent);
  },
  rank: "",
};

function order(buy) {
  if (buy + laptop.sell > laptop.max_sell) console.log("there is nothing!");
  else console.log("your order accepted");
}

function write_rank(number) {
  laptop.rank = number;
  console.log(laptop.rank);
}

class Game {
  constructor(handA = null, handB = null) {
    this.handA = handA;
    this.handB = handB;
    this.result = null;
    this.order = [
      "A",
      "K",
      "Q",
      "J",
      "T",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ];
  }
  setA(hand) {
    if (hand.lenght > 5) return Error("Length can't excess 5");
    this.handA = hand;
    return null;
  }
  setB(hand) {
    if (hand.lenght > 5) return Error("Length can't excess 5");
    this.handB = hand;
    return null;
  }
  comparesion() {
    // return True if a is better
    const { maxKv: maxKv_A, isStraight: isStraight_A } = this.processHande(
      this.handA
    );
    const { maxKv: maxKv_B, isStraight: isStraight_B } = this.processHande(
      this.handB
    );
    // console.log(maxKv_A,maxKv_B,isStraight_A,isStraight_B)
    if (isStraight_A[0] && isStraight_B[0])
      return this.comparTwoCard(isStraight_A[1], isStraight_B[1]);
    // both straight
    else {
      if (isStraight_A[0]) {
        // a is straight b can only be four of a kind or full house
        if (maxKv_B[0][1] == 4 || (maxKv_B[0][1] == 3 && maxKv_B[1][1] == 2))
          return false;
        else return true;
      } // a is not straight
      if (isStraight_B[0]) {
        // a is straight b can only be four of a kind or full house
        if (maxKv_A[0][1] == 4 || (maxKv_A[0][1] == 3 && maxKv_A[1][1] == 2))
          return true;
        else return false;
      }
      var len_a = maxKv_A.length
      var len_b = maxKv_B.length
      if(len_a<len_b) return true
      else if (len_a>len_b) return false
      else{
          for(var i=0;i<len_b;i++){
              var tem_a = maxKv_A[i]
              var tem_b = maxKv_B[i]
              if(tem_a[1]==tem_b[1] && tem_a[0]!=tem_b[0]) return this.comparTwoCard(tem_a[0],tem_b[0])
              if(tem_a[1]!=tem_b[1]) return tem_a[1]>tem_b[1]
          }
      }
    }
  }

  comparTwoCard(a, b) {
    return this.order.indexOf(a) < this.order.indexOf(b);
  }

  processHande(hand) {
    var handWithWildCard = false;
    var isStraight = this.isStraight(hand);
    if (hand.includes("*")) {
      hand = hand.replace("*", "");
      handWithWildCard = true;
    }
    var handFreq = this.getFrequency(hand);
    var handResult = this.DescendingKV(handFreq);
    if (handWithWildCard) handResult[0][1]++;
    return { maxKv: handResult, isStraight };
  }

  isStraight(hand) {
    var handWithWildCard = false;
    if (hand.includes("*")) {
      hand = hand.replace("*", "");
      handWithWildCard = true;
    }
    var handArray = hand.split("");
    var handSet = new Set(handArray)
    if(handArray.length!=handSet.size) return [false,null]
    var maxIndex = 0;
    var minIndex = 20;
    handArray.forEach((e) => {
      var temIndex = this.order.indexOf(e);
      minIndex = temIndex < minIndex ? temIndex : minIndex;
      maxIndex = temIndex > maxIndex ? temIndex : maxIndex;
    });
    if (maxIndex - minIndex == 3)
      return [true, minIndex == 0 ? "A" : this.order[minIndex - 1]];
    if (maxIndex - minIndex == 4) return [true, this.order[minIndex]];
    return [false, null];
  }

  DescendingKV(obj) {
    var entries = Object.entries(obj);
    entries.sort((a, b) => {
      if (a[1] != b[1]) return b[1] - a[1];
      else return this.order.indexOf(a[0]) - this.order.indexOf(b[0]);
    });
    console.log(entries)
    return entries;
  }

  getFrequency(string) {
    if (string.includes('*')) string = string.replace("*","")
    var freq = {};
    for (var i = 0; i < string.length; i++) {
      var character = string.charAt(i);
      if (freq[character]) {
        freq[character]++;
      } else {
        freq[character] = 1;
      }
    }
    return freq;
  }
}

// module.exports = Game  //for test uncomment this line

export default Game // for test comment this line

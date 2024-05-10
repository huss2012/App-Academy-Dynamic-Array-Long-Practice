class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = [];

    for (let i = 0; i < this.capacity; i++) {
      this.data[i] = undefined;
    }
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    //Check if the length of the array is zero:
    if (this.capacity === this.length) {
      this.resize();
    }
    if (this.length === 0) {
      this.data[0] = val;
      this.length++;
    } else {//If the length is not zero => there is/are element/s.
      this.data[this.length] = val;
      this.length++;
    }
    // this.data[this.length] = val;
    // this.length++;

  }


  pop() {

    // Your code here
    //Check if the length is not zero then remove one element from the end.
    if (this.length !== 0) {
      let thePopedEle = this.data.splice(this.length - 1, 1)[0];
      this.length--;
      return thePopedEle;
    }
  }

  shift() {

    // Your code here
    if (this.length !== 0) {
      let theShiftedEle = this.data.splice(0, 1)[0];
      this.length--;
      return theShiftedEle;
    }
  }

  unshift(val) {

    // Your code here
    if (this.capacity === this.length) {
      this.resize();
    }
    for (let i = this.length - 1; i >= 0; i--){
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {

    // Your code here
    //check if the val is in the array.
    for (let i = 0; i < this.length; i++){
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {

    // Your code here
    this.capacity *= 2;
    const arr = new Array(this.capacity);

    for (let i = 0; i < this.capacity; i++){
      arr[i] = this.data[i];
    }
    this.data = arr;
  }

}


module.exports = DynamicArray;

// counter up
class CounterUp {
  // cook properties for this
  constructor({ root, min, max, gap, speed, prefix, postfix }) {
    this.root = root;
    this.min = min || 0;
    this.max = max || 0;
    this.gap = gap || 10;
    this.speed = speed || 70;
    this.prefix = prefix || null;
    this.postfix = postfix || null;
  }

  //counter run method
  run() {
    if (this.max < 1 || this.max === 0) {
      throw RangeError(
        "max value range is " + this.max + " , needed more than " + this.max
      );
    }

    if (!this.root) {
      throw ReferenceError("element not found");
    }

    if (this.gap >= this.max) {
      throw RangeError("gap value exceeded");
    }
    // counter interval
    const counterHandlerId = setInterval(() => {
      // render data when data matched to the actual data
      if (
        (this.min > this.max * 0.75 && this.min < this.max) ||
        this.min > this.max
      ) {
        if (this.prefix) {
          // render final data in counter element
          this.root.textContent = this.prefix + "" + this.max;
        }
        if (this.postfix) {
          // render final data in counter element
          this.root.textContent = this.max + "" + this.postfix;
        }

        if (!this.postfix && !this.prefix) {
          // render final data in counter element
          this.root.textContent = this.max;
        }

        // end lifecycle of setInterval
        clearInterval(counterHandlerId);
        return;
      }

      if (this.prefix) {
        // render final data in counter element
        this.root.textContent = this.prefix + "" + this.min;
      }

      if (this.postfix) {
        // render final data in counter element
        this.root.textContent = this.min + "" + this.postfix;
      }

      if (!this.postfix && !this.prefix) {
        // render final data in counter element
        this.root.textContent = this.min;
      }

      // data increment
      this.min += this.gap;
    }, this.speed);
  }
}

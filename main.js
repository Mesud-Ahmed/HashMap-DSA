class HashMap {
    constructor(size = 53) {
      this.data = new Array(size);
      this.size = size;
      this.itemCount = 0;
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
  
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
      }
  
      return hashCode;
    }
  
    set(key, value) {
      const index = this.hash(key);
  
      if (!this.data[index]) {
        this.data[index] = [];
      }
  
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          this.data[index][i][1] = value;
          return;
        }
      }
  
      this.data[index].push([key, value]);
      this.itemCount++;
    }
  
    get(key) {
      const index = this.hash(key);
  
      if (!this.data[index]) return null;
  
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          return this.data[index][i][1];
        }
      }
  
      return null;
    }
  
    has(key) {
      return this.get(key) !== null;
    }
  
    remove(key) {
      const index = this.hash(key);
  
      if (!this.data[index]) return false;
  
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          this.data[index].splice(i, 1);
          this.itemCount--;
          return true;
        }
      }
  
      return false;
    }
  
    length() {
      return this.itemCount;
    }
  
    clear() {
      this.data = new Array(this.size);
      this.itemCount = 0;
    }
  
    keys() {
      const keysArray = [];
  
      for (let i = 0; i < this.size; i++) {
        if (this.data[i]) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        }
      }
  
      return keysArray;
    }
  
    values() {
      const valuesArray = [];
  
      for (let i = 0; i < this.size; i++) {
        if (this.data[i]) {
          for (let j = 0; j < this.data[i].length; j++) {
            valuesArray.push(this.data[i][j][1]);
          }
        }
      }
  
      return valuesArray;
    }
  
    entries() {
      const entriesArray = [];
  
      for (let i = 0; i < this.size; i++) {
        if (this.data[i]) {
          for (let j = 0; j < this.data[i].length; j++) {
            entriesArray.push(this.data[i][j]);
          }
        }
      }
  
      return entriesArray;
    }
  } 
      
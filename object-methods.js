///17.

//1.
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name );

//2.
let calculator = {
    sum(){
        
        return this.a + this.b;
    },
    mul(){

        return this.a * this.b;
    },
    read(){
        this.a = +prompt('fristNum?', '');
        this.b = +prompt('twoNum?', '');
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//3.
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    doubleUp(){
        this.step + 2;
        return this;
    },
    doubleDown(){
        this.step + 2;
        return this;
    },
    showStep: function() {
      alert( this.step );
      return this;
    }
  };

ladder
.up()
.up()
.doubleDown()
.down()
.doubleUp()
.showStep();

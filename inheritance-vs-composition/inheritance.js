class Programmer {
  constructor(name) {
    this.name = name;
  }
  
  code() {
    console.log(`${this.name} is coding...`);
  }
}

class FE extends Programmer {
  angular() {
    console.log(`${this.name} is coding on Angular...`);
  }
}

class BE extends Programmer {
  node() {
    console.log(`${this.name} is coding on Node...`);
  }
}

// The problem is that we need to duplicate the node method
class Fullstack extends FE {
  node() {
    console.log(`${this.name} is coding on Node...`);
  }
}

const programmer = new Programmer('Igor');
programmer.code();

const fe = new FE('Oleh');
fe.code();
fe.angular();

const be = new BE('Max');
be.code();
be.node();

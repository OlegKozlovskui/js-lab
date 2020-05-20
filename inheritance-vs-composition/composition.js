function createProgrammer(name) {
  const programmer = { name };
  console.log(programmer);
  return {
    ...programmer,
    ...canCode(programmer)
  };
}

function canCode({ name }) {
  return {
    code: () => console.log(`${name} is codding...`)
  }
}

function canAngular({ name }) {
  return {
    angular: () => console.log(`${name} is coding on Angular...`)
  }
}

function createFE(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canAngular(programmer)
  };
}

function canNode({ name }) {
  return {
    node: () => console.log(`${name} is coding on Node...`)
  }
}

function createBE(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canNode(programmer)
  };
}

function createFL(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canNode(programmer),
    ...canAngular(programmer)
  };
}

const programmer = createProgrammer('Oleh');
programmer.code();

const fe = createFE('Den');
fe.code();
fe.angular();

const be = createBE('Max');
be.code();
be.node();

const fl = createFL('Kris');
fl.code();
fl.node();
fl.angular();

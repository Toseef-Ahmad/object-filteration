

const obj = {
  magazines: {
      m1: {
          id: 'llb1',
          posts: {
              p1: 'one',
              p2: 'two',
              p3: 'four'
          }
      },
      m2: {
          id: 'llb1',
          posts: {
              p: 'one'
          }
      },
      m3: {
          id: 'llb2',
          posts: {
              p: 'one'
          }
      },
      m4: {
          id: 'llb1',
          posts: {
              p: 'twothree',
              p2: 'new Post'
          }
      },
      m5: {
          id: 'llb2',
          posts: {
              p1: 'p1',
              p2: 'p2'
          }
      }
  }
}

let currentId = 'llb1';
let posts = 0;
let magazines = 0;
let average = 0;
const checkedIdes = new Set();
const idArr = [];
// let firstTime = true;
for (let mag in obj.magazines) {
  currentId = obj.magazines[mag].id;
  if (!checkedIdes.has(currentId)) {
      checkedIdes.add(currentId);
      for (let i in obj.magazines) {
          if (obj.magazines[i].id === currentId) {
              console.log(obj.magazines[i].id);
              posts += Object.keys(obj.magazines[i].posts).length;
              console.log(posts)
              magazines += 1;
          }
      }
      average = posts / magazines;
      console.log(average);
      average = 0;
  }
  
}
console.log(posts);
  console.log(magazines)
  posts = 0;
  magazines = 0;

console.log(average)

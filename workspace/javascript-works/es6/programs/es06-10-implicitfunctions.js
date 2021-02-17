const posts =[
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      }
]

// console.log(posts[1]);

const post = posts.find(p => p.id ===2)
console.log(post);

const indexPos = posts.findIndex(p => p.id ===3)
console.log(indexPos);

const indexPos1 = posts.findIndex(p => p.title ==="hello ")
console.log(indexPos1);



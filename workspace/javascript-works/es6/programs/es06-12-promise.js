function resolveAfterSomeTime(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("i'm Resolved... ")
        }, time);
    })
  }

async function promiseCall () {
    console.log("Start of Script ");
    const result = await resolveAfterSomeTime(1000)
    console.log(result);

    const result1 = await resolveAfterSomeTime(3000)
    console.log(result1);
    console.log("End  of Script ");
}

promiseCall(); 

function sample() {
    console.log("hi");
}

sample() 
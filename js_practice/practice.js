const users = [
  {
    username: "anna23",
    isActive: true,
    age: 24,
    enrolledCourses: [
      {
        title: "JavaScript Basics",
        progress: 80,
        lessons: [
          { title: "Variables", duration: 10 },
          { title: "Functions", duration: 15 },
          { title: "Arrays", duration: 20 }
        ]
      },
      {
        title: "HTML & CSS",
        progress: 100,
        lessons: [
          { title: "HTML Intro", duration: 8 },
          { title: "Flexbox", duration: 12 },
          { title: "Grid", duration: 14 }
        ]
      }
    ]
  },
  {
    username: "mark_dev",
    isActive: false,
    age: 30,
    enrolledCourses: [
      {
        title: "Python for Beginners",
        progress: 60,
        lessons: [
          { title: "Syntax", duration: 20 },
          { title: "Loops", duration: 18 },
          { title: "Functions", duration: 22 }
        ]
      }
    ]
  },
  {
    username: "lilla99",
    isActive: true,
    age: 21,
    enrolledCourses: [
      {
        title: "JavaScript Basics",
        progress: 40,
        lessons: [
          { title: "Variables", duration: 10 },
          { title: "Functions", duration: 15 }
        ]
      },
      {
        title: "React Intro",
        progress: 20,
        lessons: [
          { title: "Components", duration: 25 },
          { title: "State", duration: 20 },
          { title: "Props", duration: 18 }
        ]
      }
    ]
  },
  {
    username: "dev_peter",
    isActive: true,
    age: 28,
    enrolledCourses: [
      {
        title: "Node.js",
        progress: 70,
        lessons: [
          { title: "Intro", duration: 12 },
          { title: "Express", duration: 20 },
          { title: "Middleware", duration: 18 }
        ]
      },
      {
        title: "Databases",
        progress: 50,
        lessons: [
          { title: "SQL Basics", duration: 30 },
          { title: "Joins", duration: 25 }
        ]
      }
    ]
  }
];

/*1*/
for(let i=0; i<users.length; i++) {
  console.log(users[i].username)
}

console.log(users.map(x=>x.username));

/*2*/
for(let i=0; i<users.length; i++) {
  if (users[i].isActive) {
    console.log(users[i].username)
  }
}

console.log(users.filter(x=>x.isActive).map(x=>x.username));

/*3*/
let count = 0;
for(let i=0; i<users.length; i++) {
  count++;
}

console.log(count);
console.log(users.length);

/* 4 */
for(let i=0; i<users.length; i++) {
  if (users[i].age > 25) {
    console.log(users[i].username);
  }
}

console.log(users.filter(x=>x.age > 25));

/*5*/
for (let i=0; i < users.length; i++) {
  let courseCount = 0;
  for(let j=0; j < users[i].enrolledCourses.length; j++) {
    courseCount++;
  }
  console.log(users[i].username, courseCount)
}

users.forEach(x=>console.log(x.username, x.enrolledCourses.length))

/*6*/
for(let i=0; i<users.length; i++) {
  let totalDur = 0;
  for(let j=0; j<users[i].enrolledCourses.length; j++) {
    for(let k=0; k<users[i].enrolledCourses[j].lessons.length; k++) {
      totalDur += users[i].enrolledCourses[j].lessons[k].duration;
    }
    
  }
  console.log(users[i].username, totalDur)
}

/*7*/

let maxDur = 0;
let person = undefined;

for(let i=0; i<users.length; i++) {
  let totalDur = 0;
  for(let j=0; j<users[i].enrolledCourses.length; j++) {
    for(let k=0; k<users[i].enrolledCourses[j].lessons.length; k++) {
      totalDur += users[i].enrolledCourses[j].lessons[k].duration;
      
      
      }
  }

  if(maxDur < totalDur) {
    maxDur = totalDur;
    person = users[i];
    }
}

console.log(maxDur, person.username)


/*8*/
const htmlperson = [];
for(let i=0; i<users.length; i++) {
  isHtml = false;
  for(let j=0; j<users[i].enrolledCourses.length; j++) {
    if(users[i].enrolledCourses[j].title == "HTML & CSS") {
      isHtml = true;
    }
  }

  if(isHtml) {
    htmlperson.push(users[i].username);
  }
}

for (let i=0; i<htmlperson.length; i++) {
  console.log(htmlperson[i]);
}


/*9*/
for(let i=0; i<users.length; i++) {
  let totalDur = 0;
  for(let j=0; j<users[i].enrolledCourses.length; j++) {
    for(let k=0; k<users[i].enrolledCourses[j].lessons.length; k++) {
      console.log(users[i].enrolledCourses[j].lessons[k].title);
    }
    
  }
}

/*10*/
const newArray = [];
for(let i=0; i<users.length; i++) {
 newArray.push(users[i].username);
}

console.log(newArray.map(x=>x));

/*11*/
const active = [];
for(let i=0; i<users.length; i++) {
 if(users[i].isActive) {
  active.push(users[i]);
 }
}

/*12*/
let maxCurs = 0;
let MaxCursPerson = undefined;

for(let i=0; i<users.length; i++) {
  if(maxCurs < users[i].enrolledCourses.length) {
    maxCurs = users[i].enrolledCourses.length;
    MaxCursPerson = users[i].username;
  }
}

console.log(MaxCursPerson)
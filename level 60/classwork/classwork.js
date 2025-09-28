let academy = {
  name: "Future Academy",
  courses: ["JavaScript", "Python", "React"],
  socialLink: "https://www.facebook.com/nika11keshelava/",
  reviews: {
    user1: {
      name: "Nino",
      status: "parent",
      review: "ძალიან კმაყოფილი ვარ პროგრამით და სწავლების ხარისხით."
    },
    user2: {
      name: "Giorgi",
      status: "child",
      review: "სასწავლო კურსი ძალიან საინტერესოდ იყო წარმოდგენილი."
    },
    user3: {
      name: "Tamar",
      status: "parent",
      review: "ძალიან მოსწონს ჩემს შვილს და შედეგიც ჩანს."
    }
  }
};

let entries = Object.entries(academy);
console.log("თვისებების-მნიშვნელობები:", entries);

let keys = Object.keys(academy);
console.log("თვისებები:", keys);

let values = Object.values(academy);
console.log("მნიშვნელობები:", values);

let hasCourses = academy.hasOwn("courses");
console.log("გააჩნია 'courses'?", hasCourses);

let extra = {
  member: "Registered Members: 150"
};

let mergedAcademy = Object.assign({}, academy, extra);
console.log("გაერთიანებული ობიექტი:", mergedAcademy);
Object.freeze(academy);

let isFrozen = Object.isFrozen(academy);
console.log("გაყინულია ობიექტი?", isFrozen);
import {IUser} from "@/interfaces/IUser";
import {IRessource} from "@/interfaces/IRessource";

interface IDB {
  users: Array<IUser>;
  ressources: Array<IRessource>;
}

const db: IDB = {
  users: [
    {
      id: "1a",
      name: "Julie",
      email: "julie@gmail.com",
      password: "1234",
    },
    { id: "2b", name: "Léo", email: "leo@gmail.com", password: "azerty" },
  ],
  ressources: [
    {
      id: "fsfsd",
      userID: "1a",
      type: "video",
      title: "NO-CODE : Fausse bonne idée ?",
      image:"",
      url: "https://www.youtube.com/watch?v=h2VqCnmni8M",
      description: "Jeter un oeil à Zappier, Integromat & Coda",
      myRating: 0,
      isTop: false,
      date: "2021-04-09 10:10:00",
    },
    {
      id: "ogop123",
      userID: "1a",
      type: "post",
      title: "Sécuriser une API avec Node.js et JWT",
      image: "https://miro.medium.com/max/1400/0*5hShFb_fod5mdxvH",
      url:
        "https://medium.com/@sbesnier1901/s%C3%A9curiser-une-api-avec-node-js-et-jwt-15e14d9df109",
      description: "",
      myRating: 0,
      isTop: false,
      date: "2021-02-01 09:00:00",
    },
    {
      id: "fdsiiis",
      userID: "2b",
      type: "post",
      title: "6 new TypeScript features for writing clean code",
      image: "https://miro.medium.com/max/1400/1*0lAYuIRYksZLtzbjpEs9DQ.png",
      url:
        "https://itnext.io/6-new-typescript-features-for-writing-clean-code-ea7810cf5019",
      description: "",
      myRating: 0,
      isTop: false,
      date: "2021-05-21 11:12:00",
    },
    {
      id: "oldppdpd",
      userID: "2b",
      type: "book",
      title: "Coder proprement",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/517gj2lIN8L._SX218_BO1,204,203,200_QL40_ML2_.jpg",
      url: "",
      description: "",
      myRating: 5,
      isTop: false,
      date: "2021-007-14 15:15:00",
    },
    {
      id: "eifsd",
      userID: "1a",
      type: "book",
      title: "Architecture logicielle propre",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41hEXL4mIcL._SX408_BO1,204,203,200_.jpg",
      url: "",
      description: "",
      myRating: 5,
      isFavorite: false,
      isTop: false,
      date: "2021-03-09 08:00:00",
    },
    {
      id: "chuiri",
      userID: "1a",
      type: "post",
      title: "You Should ThrowYour Unit Tests Away",
      image: "",
      url:
        "https://medium.com/ngconf/you-should-throw-away-your-unit-tests-717c6884a77b",
      description:
        "Il faut faire le ménage et pas hésiter à les supprimer quand ils ne servent plus.",
      myRating: 4,
      isFavorite: false,
      isTop: false,
      date: "2021-08-21 13:40:00",
    },
    {
      id: "voepep124",
      userID: "2b",
      type: "post",
      title: "Why I Switched Away From Google Firestore",
      image: "https://miro.medium.com/max/1250/1*sV3S0kMNH1H7voY-TEfMqg.png",
      url:
        "https://medium.com/swlh/why-i-switched-away-from-google-firestore-and-will-never-go-back-e34cafb733b",
      description:
        "Au final C'est bien pour faire des prototypes, mais finit par coûter très cher !",
      myRating: 3,
      isFavorite: false,
      isTop: false,
      date: "2021-07-08 17:10:00",
    },
    {
      id: "fosp54",
      userID: "2b",
      type: "post",
      title:
        "Functional Programming in JavaScript: Introduction and Practical Examples",
      image: "https://miro.medium.com/max/1400/1*Scj1YOBc2cxDfANrU5yQXA.png",
      url:
        "https://betterprogramming.pub/functional-programming-in-javascript-introduction-and-practical-examples-d268e44395b2",
      description: "",
      myRating: 3,
      isFavorite: false,
      isTop: false,
      date: "2021-01-09 08:30:00",
    },
    {
      id: "xcggt",
      type: "video",
      title:
        "Vue.js The Documentary",
      image: "",
      url:
        "https://www.youtube.com/watch?v=OrxmtDw4pVI",
      description: "",
      myRating: 4,
      isFavorite: false,
      isTop: false,
      date: "2021-03-13 17:30:00",
    },
  ],
};

export default db;

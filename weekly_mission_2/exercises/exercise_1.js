//Modelacion de informacion

// const issue = {
//         title: "new Repo",
//         repositoryNameAssociate: "LaunchX",
//         status: true,
//         numberOfComments: 5,
//         labels: 2,
//         author: "Miguel Ruiz",
//         dateCreated: "28-04-2022",
//         lastUpdate: "28-04-2022",
//         getTitleAndAuthor: function() {
//             return this.title + " " + this.author;
//         },
//         getGeneralInfo: function() {
//             return `This issue ${this.title} was created by ${this.dateCreated}`;

//         }
//     }
// console.log(issue);
// console.log(issue.author);
// console.log(issue.getGeneralInfo());
// console.log(issue.getTitleAndAuthor());

// const pullRequest = {
//     title: "Mi primer PR",
//     branchName: "main",
//     dateCreated: "28-04-2022",
//     status: true,
//     repositoryNameAssociated: "miguelruizF",
//     getStatus: function() {
//         return this.status;
//     },
//     getTitleAndAuthor() {
//         return `This PR ${this.title}, was created by ${issue.author}`
//     }
// }
// console.log(pullRequest);
// console.log(pullRequest.getStatus());
// console.log(pullRequest.getTitleAndAuthor());

//MODELADO DE TWITTER
const user = {
    username: "MiguelR560",
    user: "Miguel Angel Ruiz",
    age: 27,
    bio: "aqui va tu biografia",
    location: "Puebla",
    birthDate: "25-01-1995"
}
console.log(user);
console.log(user.user);

const trendingTopping = {
    username: "@juanP",
    genre: "Rock",
    hashtag: "love of my life",
    num_tuits: 41000,
    tuit: "Aqui va tu tuit",
    reactions: 452,
    getTuit() {
        return `${this.username} tuiteo lo siguiente ${this.tuit}`
    }
}

console.log(trendingTopping);
console.log(trendingTopping.username);
console.log(trendingTopping.getTuit());

const hashtag = {
    username: "@mighds45",
    title: "omg",
}

console.log(hashtag);
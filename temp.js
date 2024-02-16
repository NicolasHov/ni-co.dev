const experiences = [
    {
        "id": " 4c3f64b4-176b-4c5b-b71c-afa1567ad065 ",
        "job": "Web development trainer",
        "company": "Becode.org",
        "place": "Paris",
        "dates": "From May 2023...today",
        "description": "Creation and management of a 7-months training in Full-Stack web development for a public in professional retraining.",
        "link": "https://gitlab.com/la-boussole/gaoblaze/track",
        "technos": [
            "reactJS",
            "typeScript",
            "nodeJS",
            "expressJS",
            "postGres",
            "mongoDB",
            "dev tools",
            "agility"
        ]
    }
]

// const technos = [
//     "reactJS",
//     "typeScript",
//     "nodeJS",
//     "expressJS",
//     "postGres",
//     "mongoDB",
//     "dev tools",
//     "agility"
// ]

const searchTab = (arr, str) => {
    const chars = str.split('');
    // arr.map((item, index) => console.log(item.technos[index].includes('ea')))
    return arr.filter(
        item => chars.every(char => item.includes(char)));
    // let tab = arr.map(
    //     (item, index) => chars.every(char => item.technos[index].includes(char)));
}


const searchObj = (tab, chars, field) => tab.map(item =>
    chars.map(char => item.includes(char)))


// const chars = str.split('');
console.log(experiences[0].technos);
// const input = 're'
// console.log(searchTab(technos, input))
// console.log(searchObj(experiences[0].technos, ["r"], "technos"))
console.log("--------");
// console.log(searchObj(experiences[0].technos, ["r", "e"], "technos"))
console.log("--------");
console.log(searchObj(experiences[0].technos, ["r", "e", "a"], "technos"))
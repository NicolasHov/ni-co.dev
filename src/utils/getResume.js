
const KEY = import.meta.env.VITE_KEY;
const BIN_ID = import.meta.env.VITE_BIN_ID;

/* 
* Reads the JSON file inside the bins
*/
const url = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`

const getData = async () => {
    return fetch(url, {
        mode: 'cors',
        headers: {
            "X-Master-Key": `${KEY}`,
            'Accept': '*/*',
        },
    })
        .then(response => response.json())
        .catch(error => console.log('Error while fetching:', error))
}

/* 
* Write in the JSON file inside the bins
*/
// const saveData = async (items) => {
//     const response = await fetch(url, items,
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "X-Master-Key": KEY
//             }
//         });
//     return response.data;

// }

export { getData }
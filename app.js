const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('#btn');
const color = document.querySelector('#color');

btn.addEventListener('click', () => {
    let colorHex = "#";
    for(let i=0; i<6; i++){
        colorHex += hex[genRandomNumber()];
    }
    document.body.style.backgroundColor = colorHex;
    color.innerText = colorHex;
    btn.style.backgroundColor = colorHex;
});

const genRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}
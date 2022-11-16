const colors = ["green", "red", "blue", "yellow", "orange", "white", "brown", "pink", "Purple", "aqua", "gray", "rosybrown", "skyblue", "olive"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // console.log(document.body);    //click çalısıyour mu diye baktım.
    // bana 0-3 arasında rastgele tamsayı lazım!!!
    let randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    
    return Math.floor(Math.random() * colors.length);
 }
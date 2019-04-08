function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
var currentBackground = getRandomIntInclusive(1, 5);//How many wallpapers on the right
document.body.style.background = 'url(./images/Wallpaper'+currentBackground+'.png)';
document.body.style.backgroundSize = 'cover';

var colors = ['#C06C73','#514046','#523F64','#566E7F','#544854'];

currentBackground -= 1;
let root = document.documentElement;
root.style.setProperty("--search-bar", colors[currentBackground]);


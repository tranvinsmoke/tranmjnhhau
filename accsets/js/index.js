var dem = 7000;
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 19){
        counter = 1;
    }

},dem);

const prev = document.querySelector('.change-prev');
const next = document.querySelector('.change-next');

var count = 1;


var toi = next.onclick;
var lui = prev.onclick;

if(toi){
    dem = 0;
}
if(lui){
    dem = 0;
}

prev.onclick = function(){
    dem = 0;
    document.getElementById('radio' + count).checked = true;
    count--;
    if(count <= 1){
        count = 19;
    }
};

next.onclick = function(){
    document.getElementById('radio' + count).checked = true;
    count++;
    if(count > 19){
        count = 1;
    }
};


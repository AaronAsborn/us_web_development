// document.addEventListener('DOMContentLoaded', init);

// function init(){


    // let btn = document.getElementById('btn');
    // let btns = document.getElementById('btns');
    // let bttns = document.getElementById('bttns');
    // let bttn = document.getElementById('bttn');
    // let butn = document.getElementById('butn');
    // let butns = document.getElementById('butns');
    // let btn = document.getElementByClassName('btns');
    let lnk = document.getElementById('lnk');
    let txt = document.getElementById('txt');
    let div = document.getElementById('js');
    // let img = ev.target.src;
    // let btn = document.getSelector('#btn');

    const allBtns = document.querySelectorAll("button");



    btn.addEventListener('click', show);

    btns.addEventListener('click', show);

    bttns.addEventListener('click', show);

    bttn.addEventListener('click', show);

    butn.addEventListener('click', show);

    butns.addEventListener('click', show);

    for (const btn of allBtns){
        btn.addEventListener('click', ()=> {
            div.style.background = `url(${btn.querySelector('img').src} 6em -20em)`;
            div.style.backgroundSize = "28em";
        })
    }

    // allBtns.forEach (btn => {
    //     btn.addEventListener('click', ()=> {
    //         div.style.background = `url(${btn.querySelector('img').src})`;
    //         div.style.backgroundSize = "10em";
    //     })
    // })

    // for (let i = 0; i < allBtns.length; i++){
    //     btn.addEventListener('click', ()=> {
    //         div.style.background = `url(${btn.querySelector('img').src})`;
    //         div.style.backgroundSize = "10em";
    //     })
    // }


    lnk.addEventListener('click', input);

    txt.addEventListener('input', input);

    txt.addEventListener('change', input);

    txt.addEventListener('blur', input);

    div.style.color = "red";


    function show(ev) {
        ev.preventDefault();
        console.log(ev.target.src);
        div.style.background = "url(" + ev.target.src +") 2em 3em ";
    }

    // function shows(ev) {
    //     ev.preventDefault();
    //     console.log(ev.target.src);
    //     div.style.background = "url('./2.jpg')";
    //     div.style.backgroundSize = "10em";
    // }

    // function showts(ev) {
    //     ev.preventDefault();
    //     console.log(ev.target.src);
    //     div.style.background = "url('./3.jpg')";
    //     div.style.backgroundSize = "10em";
    // }

    // function showtt(ev) {
    //     ev.preventDefault();
    //     console.log(ev.target.src);
    //     div.style.background = "url('./4.jpg')";
    //     div.style.backgroundSize = "10em";
    // }

    // function showu(ev) {
    //     ev.preventDefault();
    //     console.log(ev.target.src);
    //     div.style.background = "url('./5.jpg')";
    //     div.style.backgroundSize = "10em";
    // }

    // function showus(ev) {
    //     ev.preventDefault();
    //     console.log(ev.target.src);
    //     div.style.background = "url('./6.jpg')";
    //     div.style.backgroundSize = "10em";
    // }

    // function input(ev) {
    //     ev.preventDefault();
    //     console.log(ev.type, ev.target, ev.currentTarget)
    // }
// }

const imgset =  [
        {
            "name": "lion",
            "img": "./1.jpg"
        },

        {
            "name": "hitachi" ,
            "img": "./56.jpg"
        },

        {
            "name": "dragon" ,
            "img": "./6.jpg"
        },

        {
            "name": "natasha" ,
            "img": "./20.jpg"
        },

        {
            "name": "hitman" ,
            "img": "./4.jpg"
        },

        {
            "name": "ram" ,
            "img": "file_243824_1577249042371.jpg"
        }
    ]

    function display (){

        const curreImg = JSON.parse(localStorage.getItem('imgDisplay'))
        if (curreImg) {
            
            document.querySelector('body').style.background = `url(${curreImg})`;
        }
        
        for (let i = 0; i < imgset.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', imgset[i].img)
            document.querySelector('body').appendChild(img)
            img.addEventListener ('click', () => {
                localStorage.setItem ('imgDisplay', JSON.stringify(imgset[i].img))
                document.querySelector('body').style.background = `url(${imgset[i].img})`;
                document.querySelector('body').style.backgroundSize = 'cover';
                document.querySelector('body').style.backgroundRepeat = 'no-repeat';
                document.querySelector('body').style.backgroundPosition = 'center';
                
            })
        }
    }

    display();


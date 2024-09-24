const products =  [
    {
        img: '/img/card-1.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: '/img/card-2.png',
        name: 'The mystery of the black square',
        user: '🫠 Jenny Wilson',
        price: '0.24 ETH'
    },
    {
        img: '/img/card-3.png',
        name: 'Pink Cloud 🌥',
        user: '🐦‍🔥Floyd Miles',
        price: '0.3 ETH'
    },
    {
        img: '/img/card-4.png',
        name: '3D Ethereum',
        user: '⭐Jane Cooper',
        price:' 0.12 ETH'
    }
]

const wrapper = document.querySelector('.live__wrapper')
products.forEach(card => {
    wrapper.innerHTML += `
    <div class="live__card">
                    <img src=${card.img} alt="" class="live__img">
                    <div class="live__box">
                        <h3>${card.name}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b> ${card.price} </b>
                            </p>
                        </div>
                    </div>
                </div>
    `
})



const products2 = [
    {
        img: '/img/card-1.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: '/img/card-2.png',
        name: 'The mystery of the black square',
        user: '🫠 Jenny Wilson',
        price: '0.24 ETH'
    },
    {
        img: '/img/card-3.png',
        name: 'Pink Cloud 🌥',
        user: '🐦Floyd Miles',
        price: '0.3 ETH'
    },
    {
        img: '/img/card-4.png',
        name: '3D Ethereum',
        user: '⭐Jane Cooper',
        price:' 0.12 ETH'
    },
    {
        img: '/img/card-1.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: '/img/card-2.png',
        name: 'The mystery of the black square',
        user: '🫠 Jenny Wilson',
        price: '0.24 ETH'
    },
    {
        img: '/img/card-3.png',
        name: 'Pink Cloud 🌥',
        user: '🐦Floyd Miles',
        price: '0.3 ETH'
    },
    {
        img: '/img/card-4.png',
        name: '3D Ethereum',
        user: '⭐Jane Cooper',
        price:' 0.12 ETH'
    },
    {
        img: '/img/card-1.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: '/img/card-2.png',
        name: 'The mystery of the black square',
        user: '🫠 Jenny Wilson',
        price: '0.24 ETH'
    },
    {
        img: '/img/card-3.png',
        name: 'Pink Cloud 🌥',
        user: '🐦‍🔥Floyd Miles',
        price: '0.3 ETH'
    },
    {
        img: '/img/card-4.png',
        name: '3D Ethereum',
        user: '⭐Jane Cooper',
        price:' 0.12 ETH'
    }
]

const wrapper2 = document.querySelector('.live__wrapper2')
products2.forEach(card => {
    wrapper2.innerHTML += `
    <div class="live__card">
                    <img src=${card.img} alt="" class="live__img">
                    <div class="live__box">
                        <h3>${card.name}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b> ${card.price} </b>
                            </p>
                        </div>
                    </div>
                </div>
    `
})




const products3 = [
    {
        img: '/img/top-card-1.png',
        name: '3D Soft Curves',
        userimg: './img/user-img-1.png',
        user: '😃 Esther Howard',
        sub: '238 Followers'
    },
    {
        img: '/img/top-card-1.png',
        name: '3D Soft Curves',
        userimg: './img/user-img-1.png',
        user: '😃 Esther Howard',
        sub: '238 Followers'
    },
    {
        img: '/img/top-card-1.png',
        name: '3D Soft Curves',
        userimg: './img/user-img-1.png',
        user: '😃 Esther Howard',
        sub: '238 Followers'
    },
    {
        img: '/img/top-card-1.png',
        name: '3D Soft Curves',
        userimg: './img/user-img-1.png',
        user: '😃 Esther Howard',
        sub: '238 Followers'
    },
    {
        img: '/img/top-card-1.png',
        name: '3D Soft Curves',
        userimg: './img/user-img-1.png',
        user: '😃 Esther Howard',
        sub: '238 Followers'
    },
    {
        img: '/img/top-card-1.png',
        name: '3D Soft Curves',
        userimg: './img/user-img-1.png',
        user: '😃 Esther Howard',
        sub: '238 Followers'
    },
    {
        img: '/img/top-card-1.png',
        name: '3D Soft Curves',
        userimg: './img/user-img-1.png',
        user: '😃 Esther Howard',
        sub: '238 Followers'
    },
    {
        img: '/img/top-card-1.png',
        name: '3D Soft Curves',
        userimg: './img/user-img-1.png',
        user: '😃 Esther Howard',
        sub: '238 Followers'
    }
]

const wrapper3 = document.querySelector('.top__wrapper')
products3.forEach(card => {
    wrapper3.innerHTML += `
              <div class="live__card">
            <img src=${card.img} alt="" class="live__img" />

            <div class="top__box">
              <img class="top__user" src=${card.user} alt="">
              <div>
                <h5>${card.user}👽</h5>
                <p>
                  Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting
                  #bitcoin since 2012.
                </p>

                <div>
                  <h5>${card.subs}</h5>
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </div>
    `
})



const btn = document.querySelector('#open-btn')
const modal = document.querySelector('#modal')
const modal__close =document.querySelector('.modal__close')
const body = document.querySelector('body')

btn.onclick = () => {
    modal.classList.add('active')
    body.classList.add('scroll')
}
 


modal__close.onclick = () => {
    modal.classList.remove('active')
    body.classList.remove('scroll')
}

document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7478629733:AAHQzLQ7h1chAgWJGKHqYRkhZgt395OosQo';  // Замените на ваш токен
    const chat_id = '-4584709074';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
       // alert("Message sent!");
       // location.reload()
       //const thanks = document.querySelector('#thanks')
       //thanks.innerText = 'raxmat jonatganisz uchun👍'
       setTimeout(() => {
           location.reload()
       }, 3000);
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });

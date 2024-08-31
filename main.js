let toggle = false;

const nav_hidden = document.getElementById('nav-hidden'),
    menu = document.getElementById('menu');

menu.onclick = () => {
    toggle = !toggle
    if (toggle)
        nav_hidden.style.height = "200px"
    else
        nav_hidden.style.height = 0;
}

/*! hesab edək back-enddən gələn dataları render edib dəyişənlərə əlavə edirik.!*/

let events = [
    {
        img: "https://c8.alamy.com/comp/2HE7RPT/happy-woman-choosing-and-buying-wine-in-supermarket-girl-with-shopping-basket-in-wine-department-of-store-2HE7RPT.jpg",
        title: "Art & Wine",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$45",
        id: 1
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-P98MbQiPci3lzoa8svRHMF_DplY9gB6Vg&s",
        title: "Outdoor Yoga Session",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "",
        id: 2
    },

    {
        img: "https://images.slurrp.com/prodrich_article/zudk0aexzz.webp?impolicy=slurrp-20210601&width=880&height=500",
        title: "Food Truck Festival",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$25",
        id: 3
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGA2288VOhdyCvEYjiOKm4MvSgBsH8g5_uw&s",
        title: "Deram Fest",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$67",
        id: 4
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-P98MbQiPci3lzoa8svRHMF_DplY9gB6Vg&s",
        title: "Food Fest",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$67",
        id: 5
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-P98MbQiPci3lzoa8svRHMF_DplY9gB6Vg&s",
        title: "Outodoor fest",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$23",
        id: 6
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGA2288VOhdyCvEYjiOKm4MvSgBsH8g5_uw&s",
        title: "Dream Fest",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$15",
        id: 7
    }
]

let upcoming_events = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtydU9ZiwM5gCdryL2eKRTSO4EePYXnwGiA&s",
        title: "OutoDoor Movie Nigth",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$34",
        id: 1
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuvWFesYtyIADgIfpCSKDJupYtxjdxOdxSA&s",
        title: "Any Title",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$15",
        id: 2
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtydU9ZiwM5gCdryL2eKRTSO4EePYXnwGiA&s",
        title: "Deccription Title",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$21",
        id: 3
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuvWFesYtyIADgIfpCSKDJupYtxjdxOdxSA&s",
        title: "Title Title",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$56",
        id: 4
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtydU9ZiwM5gCdryL2eKRTSO4EePYXnwGiA&s",
        title: "Foods & Drinks",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$45",
        id: 5
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuvWFesYtyIADgIfpCSKDJupYtxjdxOdxSA&s",
        title: "Movies Cinema",
        date: "Mon, Jul 21 • 4:00 PM",
        prince: "$34",
        id: 6
    }
]
let count = 0;
let count1 = 0;

const event_cards = document.getElementById('event-cards'),
    event_cards1 = document.getElementById('event-cards1'),
    btn = document.getElementById('btn'),
    btn1 = document.getElementById('btn1')

function addElemnts() {
    for (let i of events) {
        event_cards.innerHTML += `

        <div class="event-card">
                <img src=${i.img}
                    alt="Art & Wine">
                <div class="event-info">
                    <h3>${i.title}</h3>
                    <p>${i.date}</p>
                    <p>${i.date}</p>
                    <p class="heart"><i class="fa-regular fa-heart"></i></p>
                </div>
            </div>

        
        ` }
}

addElemnts();

function addElemnts1() {

    for (let i of upcoming_events) {
        event_cards1.innerHTML += `
        
          <div class="event-card">
                    <img src=${i.img}
                        alt="Outdoor Movie Night">
                    <div class="event-info">
                        <h3>${i.title}</h3>
                        <p>${i.date}</p>
                        <p>${i.prince}</p>
                        <p class="heart"><i class="fa-regular fa-heart"></i></p>
                    </div>
                </div>
        
        
        `
    }
}

addElemnts1();




btn.onclick = () => {
    let widthScreen = innerWidth;
    count++;
    if (widthScreen > 1386) {
        if (count < events.length - 3)
            event_cards.style.transform = `translateX(${-count * 325}px`
    }
    if (widthScreen < 1386) {
        if (count < events.length - 2)
            event_cards.style.transform = `translateX(${-count * 325}px`
    }
    if (widthScreen < 1090) {
        if (count < events.length - 1)
            event_cards.style.transform = `translateX(${-count * 325}px`
    }
    if (widthScreen < 806) {
        if (count < events.length)
            event_cards.style.transform = `translateX(${-count * 325}px`
    }
}

btn1.onclick = () => {
    let widthScreen = innerWidth;
    count1++;
    if (widthScreen > 1386) {
        if (count1 < upcoming_events.length - 3)
            event_cards1.style.transform = `translateX(${-count1 * 325}px`
    }
    if (widthScreen < 1386) {
        if (count1 < upcoming_events.length - 2)
            event_cards1.style.transform = `translateX(${-count1 * 325}px`
    }
    if (widthScreen < 1090) {
        if (count1 < upcoming_events.length - 1)
            event_cards1.style.transform = `translateX(${-count1 * 325}px`
    }
    if (widthScreen < 806) {
        if (count1 < upcoming_events.length)
            event_cards1.style.transform = `translateX(${-count1 * 325}px`
    }
}
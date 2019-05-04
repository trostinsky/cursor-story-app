import React from "react";
import Story from "./story/story";
import Post from "./post";
import UsersList from "./users/users.controller";

// 1. Создаем папку/файл
// 2. Импортируем компонент
// 3. Выводим компонент в компоненте App
// 4. Заходим в файл и начинаем писать реализацию.

const CAT_1 = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
const CAT_2 = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2015%2F12%2F11083247%2Fcat.jpg&w=450&c=sc&poi=face&q=85";
const CAT_3 = "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg";
const CAT_4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBjnCHmg6X7YGEZ4vY_sYT1bcYtwzFYDFujnWyyOhCmzuV_421w";
const CAT_5 = "https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg";

const stories = [{
    name: "Vlad Gribennikov",
    time: "3",
    image: CAT_1
}, {
    name: "Andrew Verbitsky",
    time: "5",
    image: CAT_2
}, {
    name: "Yarik Fedayai",
    time: "1",
    image: CAT_3
}, {
    name: "Назiк Осьмак",
    time: "23",
    image: CAT_4
}, {
    name: "Eduard M.",
    time: "9",
    image: CAT_5
}];


const App = (props) => (
    <div>
        {/*{stories.map((story) => (*/}
            {/*<Story {...story} />*/}
        {/*))}*/}
        {/*<Post avatar={CAT_1} text="Это текст поста" author="Vlad"/>*/}
        <UsersList />
    </div>
)
export default App;
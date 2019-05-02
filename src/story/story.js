// 1. Импортируем react
import React from "react";
import "./story.css";

const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ES3QkZ-uQvX78CNkysEgUFg1z0a9IKggPWC_I4a7YSexo_DU";

// 2. Создаем функцию или класс компонента
const Story = ({name = "Deault Name", time = 3, image = DEFAULT_IMAGE}) => {
    // 4. Пишем верстку нашего компонента
    // 5. Думаем какие пропсы нам получить и обрабатываем их
    return (
        <div className="story-wrapper">
            <img className="story-image" src={image} alt={name} />
            <div className="story-content">
                <a href="#" className="story-name">{name}</a>
                <div className="story-time">{time} ч. назад</div>
            </div>
        </div>
    )
};

// 3. Экспортируем функцию
export default Story;

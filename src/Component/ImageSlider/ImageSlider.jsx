import React, { useState, useEffect } from 'react';
import './ImageSlider.scss';

const ImageSlider = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = document.querySelectorAll(".item");
    document.getElementById("slider").appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = document.querySelectorAll(".item");
    document.getElementById("slider").prepend(items[items.length - 1]);
  };

  useEffect(() => {
    const data = [
        {
          id: 1,
          imgUrl: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&q=80&w=1035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "A UNESCO World Heritage site in India, known for its stunning architecture and historical significance.",
          name: "Taj Mahal",
        },
        {
          id: 2,
          imgUrl: "https://images.unsplash.com/photo-1616606484004-5ef3cc46e39d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "An ancient temple complex in South India with intricate stone carvings and rich cultural heritage.",
          name: "Hampi Monuments",
        },
        {
          id: 3,
          imgUrl: "https://images.unsplash.com/photo-1619878796654-cf20e84bd749?auto=format&fit=crop&q=80&w=774&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "A sacred pilgrimage site and one of the seven wonders of India, offering breathtaking views and spiritual significance.",
          name: "Mount Kailash",
        },
        {
          id: 4,
          imgUrl: "https://images.unsplash.com/photo-1649073868642-bcbbd06239d8?auto=format&fit=crop&q=80&w=1926&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "A historic fort in Rajasthan, India, known for its majestic architecture and royal heritage.",
          name: "Amber Fort",
        },
        {
          id: 5,
          imgUrl: "https://images.unsplash.com/photo-1601815264039-67c8ba1a7f98?auto=format&fit=crop&q=80&w=927&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "A UNESCO World Heritage site in Odisha, India, showcasing the intricately carved Sun Temple.",
          name: "Konark Sun Temple",
        },
        {
          id: 6,
          imgUrl: "https://images.unsplash.com/photo-1659126574791-13313aa424bd?auto=format&fit=crop&q=80&w=1032&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "A magnificent palace in Mysore, Karnataka, known for its grandeur and Indo-Saracenic architecture.",
          name: "Mysore Palace",
        },
      ];
      

    const sliderRef = document.createElement("div");
    sliderRef.id = "slider";

    data.forEach((item) => {
      const slideItem = document.createElement("div");
      slideItem.classList.add("item");
      slideItem.style.backgroundImage = `url(${item.imgUrl})`;

      const content = document.createElement("div");
      content.classList.add("content");

      const name = document.createElement("div");
      name.classList.add("name");
      name.textContent = item.name;

      const des = document.createElement("div");
      des.classList.add("des");
      des.textContent = item.desc;

      const button = document.createElement("button");
      button.textContent = "See More";

      content.appendChild(name);
      content.appendChild(des);
      content.appendChild(button);
      slideItem.appendChild(content);
      sliderRef.appendChild(slideItem);
    });

    document.getElementById("root").appendChild(sliderRef);
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div className="container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>&#9664;</button>
        <button id="next" onClick={handleClickNext}>&#9654;</button>
      </div>
    </div>
  );
};

export default ImageSlider;

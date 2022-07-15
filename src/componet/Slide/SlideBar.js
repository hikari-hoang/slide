import { React, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Image } from "antd";
import "antd/dist/antd.css";

const SlideBar = () => {
  const [visible, setVisible] = useState(false);
  const [showImage, setShowImage] = useState([]);

  const Cats = [
    {
      id: 1,
      img: "https://hoangnam-soon.github.io/Cat-Cafe/img/Cats/Cat-3.jpg",
      title: "Baron",
      author: "author",
      featured: true,
    },
    {
      id: 2,
      img: "https://hoangnam-soon.github.io/Cat-Cafe/img/Cats/Cat-1.jpg",
      title: "Karen",
    },
    {
      id: 3,
      img: "https://hoangnam-soon.github.io/Cat-Cafe/img/Cats/Cat-2.jpg",
      title: "Nat",
    },
    {
      id: 4,
      img: "https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Cats/javacatsloki.jpg?raw=true",
      title: "Loki",
    },
    {
      id: 5,
      img: "https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Cats/javacatscwakada.jpg?raw=true",
      title: "Wakada",
    },
    {
      id: 6,
      img: "https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Cats/javacatsgoese.jpg?raw=true",
      title: "Goose",
    },
    {
      id: 7,
      img: "https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Cats/jswanda.jpg?raw=true",
      title: "Wanda",
    },
    {
      id: 8,
      img: "https://hoangnam-soon.github.io/Cat-Cafe/img/Cats/Cat-8.jpg",
      title: "Tony",
    },
    {
      id: 9,
      img: "https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Cats/javacatscap.jpg?raw=true",
      title: "Cap",
    },
    {
      id: 10,
      img: "https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Cats/jstho.png?raw=true",
      title: "Thỏ",
    },
    {
      id: 11,
      img: "https://github.com/hoangnam-soon/hoangnam-soon.github.io/blob/main/Cat-Cafe/img/Cats/javacatsbaner.jpg?raw=true",
      title: "Baner",
    },
  ];
  const preViewImage = (idShow) => {
    const item = Cats?.find((x) => x.id === idShow);
    setShowImage(item);
    setVisible(true);
  };
  const properties = {
    duration: 30000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    indicators: true,
  };
  return (
    <div>
      <Slide {...properties}>
        {Cats.map((item, index) => {
          return (
            <div key={index}>
              <div
                onClick={() => {
                  preViewImage(item.id);
                }}
              >
                <img style={{ width: "100%" }} src={item.img} alt="" />
              </div>

              <div key={showImage?.id} style={{ display: "none" }}>
                <Image.PreviewGroup
                  preview={{
                    visible,
                    onVisibleChange: (vis) => {
                      setVisible(vis);
                    },
                  }}
                >
                  <Image
                    key={showImage?.id}
                    src={showImage?.img}
                    alt={item.title}
                  />
                </Image.PreviewGroup>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default SlideBar;

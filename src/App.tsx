import React, { useState } from "react";
import "./App.css";
import { Message } from "./Message";
import Card from "./Card";

export interface CardItem {
  imgUrl: string;
  heading: string;
  subheading: string;
}

function App() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    console.log("Hello world");
  }

  const handleCount = () => {
    setCount(count + 1);
  };

  const cards: Array<CardItem> = [
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_640.jpg",
      heading: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      subheading:
        "Incidunt quasi reprehenderit dolorum aperiam quidem nobis porro quibusdam fugiat sequi, commodi officiis aliquam voluptatem odio maiores nemo delectus, quaerat itaque. Itaque!",
    },
    {
      imgUrl:
        "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_16x9.jpg?w=1200",
      heading: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      subheading:
        "Incidunt quasi reprehenderit dolorum aperiam quidem nobis porro quibusdam fugiat sequi, commodi officiis aliquam voluptatem odio maiores nemo delectus, quaerat itaque. Itaque!",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Sunset_in_the_Carribean.jpg",
      heading: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      subheading:
        "Incidunt quasi reprehenderit dolorum aperiam quidem nobis porro quibusdam fugiat sequi, commodi officiis aliquam voluptatem odio maiores nemo delectus, quaerat itaque. Itaque!",
    },
  ];

  const cards2 = [];

  return (
    <div>
      <p className="subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        autem accusantium est provident doloremque dignissimos optio ducimus
        quod non totam architecto delectus, repellat labore a aspernatur vero
        impedit sequi similique.
      </p>
      <p
        style={{
          color: "red",
          fontSize: "16px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus
        sint excepturi similique ad libero voluptatem sunt optio? Veniam
        mollitia dolor quo enim placeat quis quae saepe aperiam eum! Cumque?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet
        aspernatur voluptatibus hic eveniet velit doloremque, laboriosam,
        suscipit, iusto quia numquam. Vero architecto est ea odio illum corporis
        animi accusamus.
      </p>
      <ul
        style={{
          margin: "30px",
        }}
      >
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <p>{count}</p>
      <p>
        <button
          className="btn"
          onClick={function () {
            handleClick();
          }}
        >
          Click here
        </button>
      </p>
      <br />
      <br />
      <p>
        <button onClick={handleCount}>Increment Count</button>
      </p>
      <Message message="This is message placeholder default" />
      <div className="card-container">
        {cards.map((card, index) => {
          return (
            <Card card={card} key={index}>
              <p>This is children of Card</p>
            </Card>
          );
        })}
      </div>
      <p
        style={{
          border: "1px solid red",
        }}
      >
        hello world
      </p>
      <p className="description">Hello world</p>
    </div>
  );
}

export default App;

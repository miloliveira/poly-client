import React, { useState, useEffect, useContext, useRef } from "react";

const Testing = () => {
  const div1 = useRef(null);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [allPosts, setAllPosts] = useState([]);

  const scrollDown = () => {
    window.scrollTo({
      top: div1.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {}, []);
  return (
    <div>
      <hr />
      <div ref={div1}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          magnam possimus fuga ad laboriosam ipsam dolorem voluptatibus facere
          voluptates aspernatur sit earum suscipit nam eligendi similique
          provident ex, ipsum dolore.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          magnam possimus fuga ad laboriosam ipsam dolorem voluptatibus facere
          voluptates aspernatur sit earum suscipit nam eligendi similique
          provident ex, ipsum dolore.
        </h1>
      </div>
      <hr />
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          magnam possimus fuga ad laboriosam ipsam dolorem voluptatibus facere
          voluptates aspernatur sit earum suscipit nam eligendi similique
          provident ex, ipsum dolore.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          magnam possimus fuga ad laboriosam ipsam dolorem voluptatibus facere
          voluptates aspernatur sit earum suscipit nam eligendi similique
          provident ex, ipsum dolore.
        </h1>
      </div>
      <hr />
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          magnam possimus fuga ad laboriosam ipsam dolorem voluptatibus facere
          voluptates aspernatur sit earum suscipit nam eligendi similique
          provident ex, ipsum dolore.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          magnam possimus fuga ad laboriosam ipsam dolorem voluptatibus facere
          voluptates aspernatur sit earum suscipit nam eligendi similique
          provident ex, ipsum dolore.
        </h1>
      </div>
      <button onClick={scrollDown}></button>
    </div>
  );
};

export default Testing;

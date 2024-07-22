"use client";

import { useEffect, useState } from "react";
import getCards from "../services/GetCards/GetCards";
import Card from "../components/Card/Card";

export default function Test() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getCards("/api/projects").then((res) => {
      setCards(res);
      console.log(res);
    });
  }, []);

  return (
    <main>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          link={card.link}
          img={card.img}
          subtitle={card.subtitle}
          category={card.category}
        />
      ))}
    </main>
  );
}

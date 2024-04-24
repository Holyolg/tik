'use client'
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import { Loading } from "@/app/ui/Loading/Loading";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CardDetails({params}) {
  const id = params.id
    const [card, setCard] = useState()
    const router = useRouter

    console.log(id)

    useEffect(() => {
      const getCards = async () => {
        const API_URL =  "https://6346ff4404a6d457579e4887.mockapi.io/PizzaItem/" + id;
        const res = await fetch(
          API_URL
        );
        if (!res.ok) {
          throw new Error("не загрузился");
          
        }
        return res.json();
      }; getCards().then(res => {
        setCard(res)
      })
      }, []);

      if(!card) {
        return (
        <div className="flex justify-center mt-[30vh]">
            <Loading/>
        </div>
        )
      }
console.log(card)

	return (
    <section className="p-4 mx-auto">
        <Breadcrumbs/>
         <h2 className="text-2xl mt-10">{card.title}</h2>
        <div className="mt-10">	
		<img src={card.imgUrl} className="h-96"></img>
        {/* <p>{card.date}</p> */}
        <p>ДАТА ПРОЕКТИРОВАНИЯ</p>
        {/* <p className="text-right">{card.type}</p> */}
        <p className="text-right">ТИП ПРОЕКТА</p>
        {/* <p>{card.square}</p> */}
        <p>ПЛОЩАДЬ</p>
        {/* <p className="text-right">{card.location}</p> */}
        <p className="text-right">МЕСТОПОЛОЖЕНИЕ</p>
        {/* <p>{card.status}</p> */}
        <p>СТАТУС</p>
        </div>

        <h2 className="text-2xl">ОПИСАНИЕ ПРОЕКТА</h2>
        <p className="mt-10">
            {/* {card.description} */}
        </p>
        <img src="/card.png" className="h-96"></img>

        </section>
        )}
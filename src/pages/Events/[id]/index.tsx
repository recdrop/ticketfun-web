/* eslint-disable prettier/prettier */

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { useState } from "react";
import Image from "next/image";

function Event() {
  const [pickenTickets, setPickenTickets] = useState([0, 0, 0, 0]);
  const [total, setTotal] = useState(0);
  const Tickets = [
    {
      name: "Área VIP - Meia entrada",
      price: 119.99,
    },
    {
      name: "Área VIP - Inteira",
      price: 119.99,
    },
    {
      name: "Pista - Meia entrada",
      price: 119.99,
    },
    {
      name: "Pista - Inteira",
      price: 119.99,
    },
  ];

  const handleAdd = (index: number, type: "plus" | "minus" = "plus") => {
    const newPickenTickets = [...pickenTickets];

    if (type === "plus") {
      newPickenTickets[index] += 1;
    } else if (type === "minus") {
      newPickenTickets[index] -= 1;
    }

    setPickenTickets(newPickenTickets);

    setTotal(
      newPickenTickets.reduce((acc, cur, index) => {
        return acc + cur * Tickets[index].price;
      }, 0)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <Image
        src={"/assets/imgs/Banner.png"}
        className="w-full h-full object-cover"
        alt="banner"
        width={1920}
        height={1080}
        style={{ width: "100%", height: "auto" }}
      />

      <main className="container mx-auto px-4 pt-8 pb-48">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 lg:col-span-3">
            <h1 className="not-italic font-medium text-6xl text-gray-700">
              Blackartel Festival
            </h1>

            <h2 className="text-medium leading-7 text-gray-700">
              By <b>Next Management</b> at <b>Blackartelrec</b>.
            </h2>

            <div className="m-4 ml-0 flex items-center">
              <div className="p-3 bg-red-600 not-italic font-bold text-4xl text-white rounded-lg">
                16
              </div>

              <div className="ml-3 border-label-tf rounded-lg p-4 flex leading-7">
                <img src="/assets/svg/calendar.svg" alt="calendar" />

                <span className="ml-2 not-italic font-normal text-md lg:text-xl text-gray-500">
                  Friday, 04/07/2023 10:00 PM
                </span>
              </div>
            </div>

            <div className="not-italic font-normal text-md lg:text-xl leading-6 text-justify text-gray-500 pr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt at velit vitae porta. Etiam non mauris non ex elementum
              aliquet non sit amet tortor. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam dapibus pharetra tempor. Maecenas
              sed ipsum ligula. Sed dictum leo ut viverra dictum. Vivamus eget
              rhoncus nunc. Aliquam erat volutpat. InteLorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam tincidunt at velit vitae
              porta. Etiam non mauris non ex elementum aliquet non sit amet
              tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam dapibus pharetra tempor. Maecenas sed ipsum ligula. Sed dictum
              leo ut viverra dictum. Vivamus eget rhoncus nunc. Aliquam erat
              volutpat. Integer auctor ex et justo vehicula facilisis. Fusce
              malesuada sem tortor, non fringilla ligula vulputate sit amet.
              Fusce lacinia libero eu ex molestie, in ullamcorper tortor porta.
              Morbi leo nulla, aliquet ac scelerisque eu, eleifend sed ante.
              Phasellus suscipit vulputate magna, feugiat accumsan elit
              ullamcorper ac. Sed tempor arcu augue, non finibus odio volutpat
              eget.ager auctor ex et justo vehicula facilisis. Fusce malesuada
              sem tortor, non fringilla ligula vulputate sit amet. Fusce lacinia
              libero eu ex molestie, in ullamcorper tortor porta. Morbi leo
              nulla, aliquet ac scelerisque eu, eleifend sed ante. Phasellus
              suscipit vulputate magna, feugiat accumsan elit ullamcorper ac.
              Sed tempor arcu augue, non finibus odio volutpat eget.
            </div>
          </div>

          <div className="col-span-5 lg:col-span-2">
            <div className="box-border border-transparent-tf blur-alternative-tf box-shadow-tf rounded-2xl relative lg:-mt-28">
              <div className="blur-secondary-tf border-transparent-alternative-tf rounded-t-2xl text-white p-6 flex justify-between">
                <span className="not-italic font-medium text-xl leading-6 text-white">
                  Ingressos
                </span>

                <div className="flex justify-between">
                  <img src="/assets/svg/basket.svg" alt="basket" />
                  <span className="ml-2 not-italic font-medium text-xl leading-6 text-right text-white">
                    R${total.toFixed(2).toString().replace(".", ",")}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {Tickets.map((ticket, index) => (
                  <div
                    key={index}
                    className="background-card mt-4 rounded-2xl p-6 flex justify-between align-center"
                  >
                    <div className="block">
                      <span className="block not-italic font-medium text-md lg:text-xl leading-6 text-white mb-1">
                        {ticket.name}
                      </span>
                      <span className="block not-italic font-light text-md lg:text-xl leading-6 text-white">
                        R${ticket.price.toString().replace(".", ",")} (+ R$
                        {(ticket.price * 0.1)
                          .toFixed(2)
                          .toString()
                          .replace(".", ",")}{" "}
                        de taxa)
                      </span>
                    </div>

                    <div className="flex align-center text-center justify-center">
                      <Image
                        src="/assets/svg/minus.svg"
                        className={
                          pickenTickets[index] === 0
                            ? "hidden"
                            : "cursor-pointer select-none"
                        }
                        alt="minus"
                        onClick={() => handleAdd(index, "minus")}
                        width={24}
                        height={24}
                      />

                      <div className="ml-4 mr-4 font-medium text-xl lg:text-3xl leading-2 text-white flex items-center select-none">
                        {pickenTickets[index]}
                      </div>
                      <Image
                        src="/assets/svg/plus.svg"
                        className="cursor-pointer select-none"
                        alt="plus"
                        onClick={() => handleAdd(index, "plus")}
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                ))}

                <div className="background-card mt-4 rounded-2xl p-6 flex justify-between align-center">
                  <div className="w-full lg:w-auto flex">
                    <input
                      type="text"
                      className="w-full not-italic font-normal text-lg leading-5 text-white bg-transparent"
                      placeholder="Digite aqui seu cupom"
                    />
                  </div>

                  <div className="hidden lg:flex">
                    <span className="cursor-pointer not-italic font-medium text-xl leading-6 text-right text-blue-tf-700">
                      Aplicar cupom
                    </span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-blue-tf-700 hover:bg-blue-tf-900 p-5 border-radius-tf box-border border-transparent-tf active:bg-blue-tf-700 focus:outline-none focus:ring focus:ring-blue-tf-300 not-italic font-medium text-2xl leading-7 text-center text-white">
                  Comprar ingressos
                </button>
              </div>
            </div>

            <div className="text-center m-4">
              <span className="not-italic font-normal text-lg leading-5 text-center text-gray-600">
                I accept the{" "}
                <a href="#" className="underline">
                  terms and conditions
                </a>{" "}
                as well as the refund policy.
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Event;

import Banner from "@/src/components/Banner";
import EventCard from "@/src/components/EventCard";
import Header from "@/src/components/Header";
import ButtonGroup from "@/src/components/ButtonGroup";
import Footer from "@/src/components/Footer";

function Event() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="w-full h-full">
        <img
          src={"/assets/imgs/Banner.png"}
          className="w-full h-full object-cover"
        />
      </div>

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
                    R$480,00
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="background-card rounded-2xl p-6 flex justify-between align-center">
                  <div className="block">
                    <span className="block not-italic font-medium text-md lg:text-xl leading-6 text-white mb-1">
                      Área VIP - Meia entrada
                    </span>
                    <span className="block not-italic font-light text-md lg:text-xl leading-6 text-white">
                      R$120,00 (+R$12,00 taxa)
                    </span>
                  </div>

                  <div className="flex">
                    <img
                      src="/assets/svg/plus.svg"
                      className="cursor-pointer"
                      alt="plus"
                    />
                  </div>
                </div>

                <div className="background-card mt-4 rounded-2xl p-6 flex justify-between align-center border-card-purple-tf">
                  <div className="block">
                    <span className="block not-italic font-medium text-md lg:text-xl leading-6 text-white mb-1">
                      Área VIP - Inteira
                    </span>
                    <span className="block not-italic font-light text-md lg:text-xl leading-6 text-white">
                      R$120,00 (+R$12,00 taxa)
                    </span>
                  </div>

                  <div className="flex align-center text-center justify-center">
                    <img
                      src="/assets/svg/minus.svg"
                      className="cursor-pointer"
                      alt="minus"
                    />

                    <div className="ml-4 mr-4 font-medium text-xl lg:text-3xl leading-2 text-white flex items-center">
                      2
                    </div>

                    <img
                      src="/assets/svg/plus.svg"
                      className="cursor-pointer"
                      alt="plus"
                    />
                  </div>
                </div>

                <div className="background-card mt-4 rounded-2xl p-6 flex justify-between align-center">
                  <div className="block">
                    <span className="block not-italic font-medium text-md lg:text-xl leading-6 text-white mb-1">
                      Pista - Meia entrada
                    </span>
                    <span className="block not-italic font-light text-md lg:text-xl leading-6 text-white">
                      R$120,00 (+R$12,00 taxa)
                    </span>
                  </div>

                  <div className="flex">
                    <img
                      src="/assets/svg/plus.svg"
                      className="cursor-pointer"
                      alt="plus"
                    />
                  </div>
                </div>

                <div className="background-card mt-4 rounded-2xl p-6 flex justify-between align-center">
                  <div className="block">
                    <span className="block not-italic font-medium text-md lg:text-xl leading-6 text-white mb-1">
                      Pista - Inteira
                    </span>
                    <span className="block not-italic font-light text-md lg:text-xl leading-6 text-white">
                      R$120,00 (+R$12,00 taxa)
                    </span>
                  </div>

                  <div className="flex">
                    <img
                      src="/assets/svg/plus.svg"
                      className="cursor-pointer"
                      alt="plus"
                    />
                  </div>
                </div>

                <div className="background-card mt-4 rounded-2xl p-6 flex justify-between align-center">
                  <div className="w-full lg:w-auto flex">
                    <input
                      type="text"
                      className="w-full not-italic font-normal text-lg leading-5 text-white bg-transparent"
                      placeholder="Digite aqui seu cupom"
                    />
                  </div>

                  <div className="hidden lg:flex">
                    <span className="cursor-pointer not-italic font-medium text-xl leading-6 text-right text-purple-tf-900">
                      Aplicar cupom
                    </span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-purple-tf-900 hover:bg-purple-900 p-5 border-radius-tf box-border border-transparent-tf active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 not-italic font-medium text-2xl leading-7 text-center text-white">
                  Comprar ingressos
                </button>
              </div>
            </div>

            <div className="text-center m-4">
              <span className="not-italic font-normal text-lg leading-5 text-center text-gray-600">
                I accept the
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

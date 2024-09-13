import config from '../public/config.json';
import Form from './Form';
import AppButton from './AppButton';
import FadeDownOnScroll from './FadeDownOnScroll';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


export default function Main() {
  return (
    <section className="text-gray-600 body-font">

      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-black delay-[300ms] duration-[600ms] taos:translate-y-[-200px] taos:opacity-0"
              data-taos-offset="500">
              {config.appName}
            </h1>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <p className="mb-4 xl:w-3/4 text-gray-600 text-xl ">
              {config.tagline}
            </p>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__bounceIn">
            <AppButton />
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className="flex justify-center py-5 text-gray-500">
              <span className="justify-center">Available on the iOS Store</span>
            </div>
          </AnimationOnScroll>
        </div>

        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-60 md:ml-1 ml-24"
            alt="iPhone-15"
            src={config.heroimg}
          ></img>
        </div>
      </div>


      {/* FEATURES */}
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <h1
            style={{ color: config.primaryColor }}
            className="mb-8 text-6xl Avenir font-semibold"
          >
            Features
          </h1>
        </AnimationOnScroll>


        <AnimationOnScroll animateIn="animate__fadeInUp">
          <h1 className="mb-8 text-xl text-gray-600 text-center px-20 animate-fade-down">
            {config.featuresTagline}
          </h1>
        </AnimationOnScroll>



        <div className="py-10">
          <div className="max-w-6xl mx-auto px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {config.features.map((feature, index) => (
                <AnimationOnScroll animateIn="animate__fadeInLeft" duration={index / 2}>
                  <div key={index} className="p-6 text-left animate-fade-right">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-black">{feature.name}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </AnimationOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <h1 className="mb-5 text-6xl Avenir font-semibold text-black">
                Subscribe to our newsletter
              </h1>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp">
              <h1 className="mb-9 text-xl text-gray-600">
                Enter your email address and get our newsletters straight away.
              </h1>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceIn">
              <Form />
            </AnimationOnScroll>

          </div>
        </div>
      </section>


      {/* 2nd Call to Action */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 text-center">
          <div className="py-24 px-10 md:py-36 p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 from-10% via-sky-700 via-30% to-red-500 to-90%">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-white">
              {config.appName}
            </h1>

            <div className="flex justify-center">
              <a
                className="inline-flex items-center px-6 py-4 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg bg-gray-900 rounded-full"
                style={{ backgroundColor: config.primaryColor }}
                href={config.linkToAppStore}
              >
                <span className="justify-center">👉 Get the App</span>
              </a>
            </div>
            <div className="flex justify-center py-5 text-gray-200">
              <span className="justify-center">Available on the iOS Store</span>
            </div>
          </div>
        </div>
      </section>



    </section >
  );
}

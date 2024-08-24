import config from '../public/config.json';


export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-white">
            {config.appName}
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-300 text-xl">
            {config.tagline}
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-6 py-4 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg bg-gray-900 rounded-full"
              style={{ backgroundColor: config.primaryColor }}
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">👉 Get the App</span>
            </a>
          </div>

          <div className="flex justify-center py-5 text-gray-300">
            <span className="justify-center">Available on the iOS Store</span>
          </div>

        </div>

        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-15"
            src={config.heroimg}
          ></img>
        </div>
      </div>


      {/* FEATURES */}
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1
          style={{ color: config.primaryColor }}
          className="mb-8 text-6xl Avenir font-semibold"
        >
          Features
        </h1>
        <h1 className="mb-8 text-xl text-gray-300 text-center px-20">
          {config.featuresTagline}
        </h1>



        <div className="py-10">
          <div className="max-w-6xl mx-auto px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {config.features.map((feature, index) => (
                <div key={index} className="p-6 text-left">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">{feature.name}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section> */}


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
                href="https://github.com/r1/nine4-2/"
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



    </section>
  );
}

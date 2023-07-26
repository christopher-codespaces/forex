import React from 'react';
import { FaStar } from 'react-icons/fa'; // Importing react-icons package for star icons

const Testimonial = () => { 
    const data = {
    totalReviews: 2157,
    companyName: 'Forex Signals Ltd.',
    reviews: [
      {
        rating: 5,
        quote: 'The forex signals provided by Forex Signals Ltd. are amazing! They have helped me increase my profits significantly.',
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: 'John Doe',
        designation: 'Forex Trader',
      },
      {
        rating: 4,
        quote: 'I joined their forex trading course, and it has been an incredible learning experience. Highly recommended!',
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: 'Jane Smith',
        designation: 'Student',
      },
      {
        rating: 5,
        quote: 'Their forex signals have been a game-changer for me. I can\'t thank Forex Signals Ltd. enough for their excellent service.',
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: 'Emily Johnson',
        designation: 'Forex Trader',
      },
    ],
  };
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">{data.totalReviews} people have said how good {data.companyName}</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600">Check all {data.totalReviews} reviews</a>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {data.reviews.map((review, index) => (
                <div key={index} className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {/* Use the react-icons for stars */}
                        <div className="flex space-x-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <FaStar key={i} className="w-5 h-5 text-[#FDB241]" />
                          ))}
                        </div>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">"{review.quote}"</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={review.avatar} alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{review.name}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{review.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

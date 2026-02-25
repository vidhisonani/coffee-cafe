import React from "react";
import Slider from "react-slick";
function Testimonial() {
  const TestimonialData = [
    {
      id: 1,
      name: "Aarav Mehta",
      text: "The coffee here is absolutely amazing. Rich flavor and perfect aroma!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      text: "A peaceful place with the best cold coffee I've ever had.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Rohan Patel",
      text: "Premium taste and excellent service. Highly recommended!",
      img: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      id: 4,
      name: "Sneha Verma",
      text: "Loved the ambience and the hot coffee. Perfect for work and chill.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 5,
      name: "Kunal Singh",
      text: "A must-visit place for every coffee lover. Truly premium quality.",
      img: "https://randomuser.me/api/portraits/men/81.jpg",
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 10000, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-14 dark:bg-coffeeLight">
      <div className="mx-auto">
        <div data-aos="fade up" className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => {
              return (
                <div className="my-6" key={data.id}>
                    <div className="min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex flex-col gap-4 shadow-lg py-8 px-6 mx-0 sm:mx-4 rounded-xl bg-primary/10 dark:bg-coffeeDark dark:shadow-black/40 relative">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt={data.id}
                        className="rounded-full w-20 h-20 mx-auto"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {data.text}
                        </p>
                        <h1 className="text-xl font-bold text-black/70 dark:text-coffeeLight font-cursive">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 dark:text-coffeeLight text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

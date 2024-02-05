import logo from "./assets/amazon_logo.png";
import location from "./assets/location_icon.png";
import search from "./assets/search_icon.png";
import drop from "./assets/dropdown_icon.png";
import flag from "./assets/us_flag.png";
import cart from "./assets/cart_icon.png";
import menu from "./assets/menu_icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import img1 from "./assets/header1.jpg";
import img2 from "./assets/header2.jpg";
import img3 from "./assets/header3.jpg";
import img4 from "./assets/header4.jpg";
import img5 from "./assets/header5.jpg";
import img6 from "./assets/header6.jpg";
import cimg1 from "./assets/box1-1.jpg";
import cimg2 from "./assets/box1-2.jpg";
import cimg3 from "./assets/box1-3.jpg";
import cimg4 from "./assets/box1-4.jpg";
import cimg5 from "./assets/box2-1.jpg";
import cimg6 from "./assets/box2-2.jpg";
import cimg7 from "./assets/box2-3.jpg";
import cimg8 from "./assets/box2-4.jpg";
import cimg9 from "./assets/box3-1.jpg";
import cimg10 from "./assets/box3-2.jpg";
import cimg11 from "./assets/box3-3.jpg";
import cimg12 from "./assets/box3-4.jpg";
import product1 from "./assets/product1-1.jpg";
import product2 from "./assets/product1-2.jpg";

import product3 from "./assets/product1-3.jpg";
import product4 from "./assets/product1-4.jpg";
import product5 from "./assets/product1-5.jpg";
import product6 from "./assets/product1-6.jpg";
import product7 from "./assets/product1-7.jpg";
import product8 from "./assets/product1-8.jpg";
import product9 from "./assets/product1-9.jpg";
import product10 from "./assets/product1-10.jpg";

import product11 from "./assets/product2-1.jpg";
import product12 from "./assets/product2-2.jpg";

import product13 from "./assets/product2-3.jpg";
import product14 from "./assets/product2-4.jpg";
import product15 from "./assets/product2-5.jpg";
import product16 from "./assets/product2-6.jpg";
import product17 from "./assets/product2-7.jpg";
import product18 from "./assets/product2-8.jpg";
import product19 from "./assets/product2-9.jpg";
import product20 from "./assets/product2-10.jpg";
import product21 from "./assets/product2-11.jpg";
import product22 from "./assets/product2-12.jpg";

const Header = () => {
  return (
    <div className="text-white font-bold bg-[#dadada] ">
      <nav className="bg-[#131921] p-5 flex  items-center justify-between">
        <div>
          <img className="w-20" src={logo} alt="logo"></img>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img className="w-5" src={location} alt="location" />
          </div>
          <div className="text-sm">
            <p>Deliver To </p>
            <h2>India</h2>
          </div>
        </div>
        <div className="relative">
          <input
            className="w-[500px] p-2 rounded-r-lg"
            placeholder="Search Amazon"
          />
          <p className="text-black h-[100%] px-4 flex items-center  font-light text-sm absolute -left-[76px] top-0 rounded-l-lg bg-gray-300">
            Add
            <img className="w-4 ml-1" src={drop} alt="drop" />
          </p>
          <img
            className="w-10 absolute right-0 top-0  rounded-lg bg-yellow-400 h-full"
            src={search}
            alt="search"
          ></img>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-5" src={flag} alt="flag" />
          <h3>EN</h3>
          <img className="w-3" src={drop} alt="drop" />
        </div>
        <div className="relative">
          <p className="text-sm">Hello,sign in</p>

          <h2 className="text-sm">
            Account & List
            <img
              className="w-3 absolute -right-4 top-6 "
              src={drop}
              alt="drop"
            />{" "}
          </h2>
        </div>
        <div>
          <h3 className="text-sm">
            Returns<br></br> & Orders
          </h3>
        </div>
        <div className="flex items-center">
          <img className="w-8" src={cart} alt="cart" />
          <p>Cart</p>
        </div>
      </nav>
      <nav className="bg-[#232f3e] p-2">
        <ul className="flex justify-between ">
          <li>
            <img className="w-8" src={menu} alt="menu"></img>
          </li>
          <li>All</li>
          <li>Fresh</li>
          <li>Amazon miniTV</li>
          <li>Sell</li>
          <li>Best Sellers</li>
          <li>Mobiles</li>
          <li>Today's Deals</li>
          <li>Electronics</li>
          <li>Customer Service</li>
          <li>New Releases</li>
          <li>Prime</li>
          <li>Gift Ideas</li>
        </ul>
      </nav>
      <div className="text-black">
        <Swiper spaceBetween={50} slidesPerView={1} direction="horizontal">
          <SwiperSlide>
            <div className="relative">
              <img className=" w-full object-cover" src={img1} alt="img1" />
              {/* Apply linear gradient mask using the bg-gradient-to-b utility class */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="h-screen w-full object-cover"
                src={img2}
                alt="img1"
              />
              {/* Apply linear gradient mask using the bg-gradient-to-b utility class */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="h-screen w-full object-cover"
                src={img3}
                alt="img1"
              />
              {/* Apply linear gradient mask using the bg-gradient-to-b utility class */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="h-screen w-full object-cover"
                src={img4}
                alt="img1"
              />
              {/* Apply linear gradient mask using the bg-gradient-to-b utility class */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="h-screen w-full object-cover"
                src={img5}
                alt="img1"
              />
              {/* Apply linear gradient mask using the bg-gradient-to-b utility class */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="h-screen w-full object-cover"
                src={img6}
                alt="img1"
              />
              {/* Apply linear gradient mask using the bg-gradient-to-b utility class */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-wrap justify-between text-black -mt-96 absolute z-10    ">
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl  ">
          <h3 className="text-xl">Freee International Returns</h3>
          <img className="rounded-xl" src={cimg1} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl">
          <h3 className="text-xl">Lunar New Year</h3>
          <img className="rounded-xl" src={cimg2} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl">
          <h3 className="text-xl">Toy Under $25</h3>
          <img className="rounded-xl" src={cimg3} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl">
          <h3 className="text-xl">Deals in PCs</h3>
          <img className="rounded-xl" src={cimg4} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 text-black mt-5     ">
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl  ">
          <h3 className="text-xl">Grooming Products</h3>
          <img className="rounded-xl" src={cimg5} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl">
          <h3 className="text-xl">Latest Devices</h3>
          <img className="rounded-xl" src={cimg6} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl">
          <h3 className="text-xl">Pets Food</h3>
          <img className="rounded-xl" src={cimg7} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl">
          <h3 className="text-xl">Fashion Mart</h3>
          <img className="rounded-xl" src={cimg8} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
      </div>
      <div className=" p-5 mb-5 border-2 mt-5 ">
        <h2 className="text-black text-2xl p-5">
          Best Sellers in Sports & Outdoors
        </h2>
        <div className="flex overflow-x-auto gap-5 ">
          <Swiper spaceBetween={50} slidesPerView={5} direction="horizontal">
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]  rounded-5xl"
                src={product1}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product2}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product3}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product4}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product5}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product6}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product7}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product8}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product9}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product10}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product5}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product1}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product7}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product3}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product9}
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[200px] h-[200px]"
                src={product2}
                alt="product"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 text-black w-[1400px] ml-auto mr-auto     ">
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl ">
          <h3 className="text-xl">Stationary</h3>
          <img className="rounded-xl" src={cimg9} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl">
          <h3 className="text-xl">Laptops for Study</h3>
          <img className="rounded-xl" src={cimg10} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl">
          <h3 className="text-xl">Office Chairs</h3>
          <img className="rounded-xl" src={cimg11} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
        <div className="flex flex-col gap-3 p-5 bg-white max-w-[24%] min-w-[200px] rounded-xl">
          <h3 className="text-xl">Gaming Monitor</h3>
          <img className="rounded-xl" src={cimg12} alt="cimg1" />
          <a className="text-xl text-[#009999] font-bold" href="/">
            Shop More
          </a>
        </div>
      </div>
      <div className="text-black mb-5 w-[1400px] ml-auto mr-auto">
        <h2 className="text-2xl p-6">Deals Under $25</h2>

        <div className="flex  gap-2 mt-2">
          <Swiper spaceBetween={50} slidesPerView={5} direction="horizontal">
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5 rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product11} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product12} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product13} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product14} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product15} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-centermin-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product16} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product17} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product18} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product19} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product20} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product21} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center min-w-[210px] bg-[#fbfbfb] p-5  rounded-3xl">
                <div>
                  <img className="w-[110px] m-5" src={product22} />
                </div>
                <div>
                  <p className="bg-[#be0b3b] text-white inline-block p-1 rounded-md m-2 text-sm">
                    27% off
                  </p>
                  <span className="text-[#be0b3b] font-semibold text-sm">
                    Deal
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  $<span>14.49</span>List Price : $19.95
                </p>
                <h4 className="text-[#525252] text-sm font-bold">
                  This Product Is The Best For You
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <footer className="flex justify-between items-center text-white bg-[#131921] p-3">
        <img src={logo} width={100}></img>
        <p>&copy; 1996-2024,Amazon.com , Inc. or its affiliates</p>
      </footer>
    </div>
  );
};
export default Header;

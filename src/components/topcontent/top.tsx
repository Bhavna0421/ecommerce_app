import Image from "next/image";
import React from "react";
import "./topcontent.module.css";

const Topcontent = () => {
  // const images = [
  //   "https://i.pinimg.com/736x/2a/fd/05/2afd0541bb003577c986a3ec535415eb.jpg",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY6ML8-yTbLPw8qbp_aAMWlgB-4lQIb4_Jw&usqp=CAU",
  //   "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5jHxCN6SEQNWx_5FoNp5IsQIInPup2w4jA&usqp=CAU",
  // ];
  // const delay = 2500;
  // const [index, setIndex] = React.useState(0);
  // const timeoutRef = React.useRef<any>();

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  // React.useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);
  return (
    <div
      style={{
        backgroundColor: "#F6F6F6",
        marginTop: "30px",
        marginLeft: "30px",
      }}
    >
      {/* <div >
        <Image
          priority
          src="/assets/banner.jpg"
          width={1705}
          height={650}
          alt="image not found"
        />
      </div> */}
      {/* <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Topcontent;

{/* <div
  style={{ backgroundColor: "#F6F6F6", marginTop: "30px", marginLeft: "30px" }}
>
  <div>
    <Image
      priority
      src="/assets/banner1.jpg"
      width={1705}
      height={650}
      alt="image not found"
    />
  </div>
</div>; */}

"use client";

import { ReactNode, useState, MouseEvent } from "react";
import ssheet from "./ApplicationTestimonials.module.scss";
import { Testimonial } from "@/modules/scholarships/domain/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCard } from "../TestimonialCard";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import { Button } from "../Button";

type Props = {
  children?: ReactNode | ReactNode[];
  testimonials?: Testimonial[];
};

export const ApplicationTestimonials = ({ children, testimonials }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOut, setMouseOut] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setMouseOut(false);
  }

  function handleMouseOut(e: MouseEvent) {
    setMouseOut(true);
  }

  function handleMouseIn(e: MouseEvent) {
    setMouseOut(false);
  }

  return (
    <div
      className={ssheet.container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      onMouseEnter={handleMouseIn}
      style={{ cursor: "none" }}
    >
      <Button
        className={mouseOut ? ssheet.hiddenFollowBtn : ssheet.followBtn}
        style={{
          position: "fixed",
          zIndex: 1000,
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        Drag
      </Button>
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
      >
        {testimonials?.map((t) => (
          <SwiperSlide key={t.id} className={ssheet.swiperSlide}>
            <TestimonialCard
              style={{ margin: "auto" }}
              card={{
                imageUrl: t.small_picture.src,
                message: t.text,
                // name: t.name,
                name: "Test name",
                education: t.education || "Test education",
                position: t.current_position || "Test position",
                socialLogoUrl: "/LinkedIn.svg",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {children}
      <div className={`${ssheet.bgDetail} main-container`} />
    </div>
  );
};

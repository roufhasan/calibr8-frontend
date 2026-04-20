"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import CldImage from "@/components/ui/CldImage";
import { cn } from "@/lib/utils";
import { certificationLogos } from "@/utils/certificationLogos";
import "swiper/css/free-mode";
import "swiper/css";

export default function Gallery({ monitor }) {
  const { data_source, thumbnail_url, gallery_urls, model } = monitor;

  const swiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  const [activeImage, setActiveImage] = useState(thumbnail_url);
  const allImages = [thumbnail_url, ...(gallery_urls ?? [])];

  return (
    <div className="w-full shrink-0 space-y-3 md:max-w-106">
      <div className="relative">
        {data_source && (
          <div className="bg-background/80 border-border/30 pointer-events-none absolute top-2 right-2 z-50 inline-flex w-fit items-center gap-1.5 rounded border px-1.5 py-0.5">
            <Image
              src={certificationLogos[data_source]}
              alt={data_source}
              width={11}
              height={11}
            />
            <span className="text-muted-foreground text-[11px] font-medium tracking-wide capitalize">
              {data_source} Verified
            </span>
          </div>
        )}

        {/* main image */}
        <Swiper
          className="w-full overflow-hidden rounded-sm border bg-white"
          modules={[Mousewheel]}
          mousewheel
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveImage(allImages[swiper.activeIndex]);
            thumbSwiperRef.current?.slideTo(swiper.activeIndex);
          }}
        >
          {allImages.map((url, i) => (
            <SwiperSlide key={`${url}_${i}`}>
              <div className="relative aspect-4/3 w-full">
                <CldImage
                  src={url}
                  alt={`${model} view ${i + 1}`}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, 424px"
                  className="object-contain p-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* thumbnail images */}
      <Swiper
        className="w-full select-none"
        freeMode
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={8}
        onSwiper={(swiper) => (thumbSwiperRef.current = swiper)}
      >
        {allImages.map((url, i) => (
          <SwiperSlide key={url} className="w-15!">
            <button
              onClick={() => {
                setActiveImage(url);
                swiperRef.current?.slideTo(i);
                thumbSwiperRef.current?.slideTo(i);
              }}
              className={cn(
                "relative size-15 shrink-0 overflow-hidden rounded-sm border bg-white transition-colors",
                activeImage === url
                  ? "border-primary/75"
                  : "hover:border-foreground/30 border hover:cursor-pointer",
              )}
            >
              <CldImage
                src={url}
                alt={`${model} view ${i + 1}`}
                fill
                sizes="60px"
                className="pointer-events-none object-contain p-1.5"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// src/components/elements/Head.jsx
import React, { useEffect } from "react";

export default function Head() {
  useEffect(() => {
    document.title = "نیلگون خلیج‌فارس | باربری کرمانشاه - حمل بار سریع و مطمئن";

    // تابع کمکی برای ایجاد یا به‌روزرسانی meta یا link
    const setTag = (tagName, attributes) => {
      let element = document.querySelector(
        `${tagName}${attributes.name ? `[name="${attributes.name}"]` : ""}${
          attributes.property ? `[property="${attributes.property}"]` : ""
        }`
      );
      if (!element) {
        element = document.createElement(tagName);
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) =>
        element.setAttribute(key, value)
      );
    };

    // متاهای اصلی
    setTag("meta", {charSet: "UTF-8" });
    setTag("meta", {name: "viewport", content: "width=device-width, initial-scale=1.0"});
    setTag("meta", {name: "description", content: "باربری نیلگون خلیج فارس: خدمات حمل بار سریع و مطمئن در کرمانشاه و سراسر ایران. بیمه معتبر، قیمت مناسب و پشتیبانی ۲۴ ساعته."});
    setTag("meta", {name: "keywords", content: "باربری کرمانشاه, حمل بار, نیلگون خلیج فارس, لجستیک, حمل و نقل, باربری بین شهری"});
    setTag("meta", {name: "robots", content: "index, follow" });

    // favicon و CSS
    const linkData = [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css", crossOrigin: "anonymous"},
      { rel: "stylesheet", href: "/assets/style-C-fXzPBj.css" },
      { rel: "canonical", href: "https://nilgoonlogistics.ir/" },
    ];
    linkData.forEach((attrs) => setTag("link", attrs));

    // Open Graph
    const ogTags = [
      {property: "og:title", content: "نیلگون خلیج‌فارس | پایانه بار کرمانشاه - حمل بار سریع",},
      {property: "og:description", content: "حمل بار مطمئن در کرمانشاه و سراسر ایران با بیش از ۸۰ سال تجربه. بیمه معتبر و پشتیبانی ۲۴ ساعته.",},
      {property: "og:url", content: "https://nilgoonlogistics.ir" },
      {property: "og:type", content: "website" },
      {property: "og:image", content: "https://nilgoonlogistics.ir/truck.svg",},
      {property: "og:locale", content: "fa_IR" },
      {property: "og:site_name", content: "Nilgoon Logistics" },
    ];
    ogTags.forEach((attrs) => setTag("meta", attrs));

    // Twitter
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "باربری نیلگون خلیج فارس" },
      { name: "twitter:description", content: "خدمات حمل بار در کرمانشاه و سراسر ایران با بیش از ۸۰ سال تجربه.",},
    ];
    twitterTags.forEach((attrs) => setTag("meta", attrs));
  }, []);

  return null; // چون همه‌ی تگ‌ها مستقیم در <head> اضافه می‌شن
}

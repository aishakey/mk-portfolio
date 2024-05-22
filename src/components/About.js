"use client";

import Section from "./Section";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const initStackCardsEffect = (element) => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          window.addEventListener("scroll", () => animateStackCards(element));
        } else {
          window.removeEventListener("scroll", () =>
            animateStackCards(element)
          );
        }
      });
      observer.observe(element);
    };

    const animateStackCards = (element) => {
      const top = element.getBoundingClientRect().top;
      const items = element.getElementsByClassName("js-stack-cards__item");
      for (let i = 0; i < items.length; i++) {
        const scrolling = items[i].getBoundingClientRect().top - top;
        if (scrolling > 0) {
          items[i].style.transform = `translateY(${scrolling * 0.1}px) scale(${
            1 - scrolling * 0.001
          })`;
        }
      }
    };

    const stackCards = document.getElementsByClassName("js-stack-cards");
    if (stackCards.length > 0) {
      Array.from(stackCards).forEach((card) => {
        initStackCardsEffect(card);
      });
    }
  }, []);

  return (
    <Section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <ul className="stack-cards js-stack-cards">
          <li className="stack-cards__item js-stack-cards__item bg-white shadow-lg rounded-lg p-8 mb-4">
            <h3 className="text-xl font-bold mb-2">Card 1</h3>
            <p className="text-gray-700">Content for the first card...</p>
          </li>
          <li className="stack-cards__item js-stack-cards__item bg-white shadow-lg rounded-lg p-8 mb-4">
            <h3 className="text-xl font-bold mb-2">Card 2</h3>
            <p className="text-gray-700">Content for the second card...</p>
          </li>
          <li className="stack-cards__item js-stack-cards__item bg-white shadow-lg rounded-lg p-8 mb-4">
            <h3 className="text-xl font-bold mb-2">Card 3</h3>
            <p className="text-gray-700">Content for the third card...</p>
          </li>
        </ul>
      </div>
    </Section>
  );
}

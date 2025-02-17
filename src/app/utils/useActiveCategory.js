"use client";
import { useEffect } from "react";

const useActiveCategory = (dependencyList = []) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // When 50% of a category is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newHash = `#${entry.target.id}`;
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, null, newHash);
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".category-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, dependencyList);
};

export default useActiveCategory;

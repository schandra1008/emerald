let lenisInstance = null;

export const setLenis = (instance) => {
  lenisInstance = instance;
};

export const scrollToId = (target) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -72, duration: 0.9 });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
};

export const stopLenis = () => lenisInstance?.stop();
export const startLenis = () => lenisInstance?.start();

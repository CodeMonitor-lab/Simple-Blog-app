import React from "react";

const HeroBanner = ({
  icon,
  title,
  description,
  buttonText,
  align = "text-center",
}) => {
  return (
    <section className="relative py-20 overflow-hidden w-full">
      {/* Background Floating Shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-1/3 max-w-[300px] aspect-square bg-cyan-300/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-1/3 max-w-[350px] aspect-square bg-purple-400/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/4 w-1/4 max-w-[200px] aspect-square bg-pink-300/20 rounded-full blur-2xl animate-float-fast" />
      </div>

      {/* Content */}
      <div className={`mx-auto px-6 max-w-3xl ${align}`}>
        {/* Optional Icon */}
        {icon && (
          <div className="mb-4 text-5xl flex justify-center">
            {icon}
          </div>
        )}

        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {title}
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>

        {buttonText && (
          <button className="mt-6 px-6 py-3 rounded-xl bg-black text-white text-sm shadow-lg hover:opacity-90 transition">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;

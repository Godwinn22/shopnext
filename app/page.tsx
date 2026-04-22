import React from "react";

const Home = () => {
    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold text-dark">
                Welcome to ShopNext
            </h1>
            <p className="text-gray-500 mt-2">
                Discover the latest products at unbeatable prices.
            </p>
            <div className="flex gap-3 mt-6">
                <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                    Shop Now
                </button>
                <button className="bg-navy text-white px-6 py-2 rounded-full text-sm font-medium">
                    Learn More
                </button>
            </div>
        </main>
    );
};

export default Home;

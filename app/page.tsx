import Link from "next/link";
import Container from "@/components/Container";

const categories = [
    { label: "Electronics", slug: "electronics", icon: "💻" },
    { label: "Clothing", slug: "clothing", icon: "👕" },
    { label: "Jewellery", slug: "jewelery", icon: "💍" },
    { label: "All Products", slug: "all", icon: "🛍️" },
];
const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-neutral-light py-20">
                <Container>
                    <div className="flex flex-col items-start gap-4 max-w-xl">
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                            New Arrivals Available
                        </span>
                        <h1 className="text-4xl font-bold text-dark leading-tight">
                            Shop The Latest <br />
                            Trends With ShopNext
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Discover thousands of products across all
                            categories. Fast delivery, easy returns, unbeatable
                            prices.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/products"
                                className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-navy transition-colors"
                            >
                                Shop Now
                            </Link>
                            <Link
                                href="/about"
                                className="text-dark text-sm font-semibold underline underline-offset-4 hover:text-primary transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Categories Section */}
            <section className="py-16">
                <Container>
                    <h2 className="text-2xl font-bold text-dark mb-8">
                        Shop By Category
                    </h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {categories.map((category) => (
                            <Link
                                key={category.label}
                                href={`/products?category=${category.slug}`}
                                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral bg-white p-6 hover:border-primary hover:shadow-sm transition-all"
                            >
                                <span className="text-3xl">{category.icon}</span>
                                <span className="text-sm font-medium text-dark">
                                    {category.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
};

export default Home;

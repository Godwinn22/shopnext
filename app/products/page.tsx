import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

async function getProducts(): Promise<Product[]> {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
}

export default async function Products() {
    const products = await getProducts();
    return (
        <main>
            <section className="py-10">
                <Container>
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-dark">
                            All Products
                        </h1>
                        <p className="text-gray-500 mt-1">
                            {products.length} products available
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.id}`}
                                className="group flex flex-col rounded-2xl border border-neutral bg-white p-4 hover:border-primary hover:shadow-md transition-all"
                            >
                                <div className="relative h-48 w-full mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <span className="text-xs text-primary font-medium capitalize">
                                        {product.category}
                                    </span>
                                    <h2 className="text-sm font-semibold text-dark line-clamp-2 group-hover:text-primary transition-colors">
                                        {product.title}
                                    </h2>
                                    <div className="flex items-center justify-between mt-auto pt-3">
                                        <span className="text-base font-bold text-dark">
                                            ${product.price}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            ⭐ {product.rating.rate}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}

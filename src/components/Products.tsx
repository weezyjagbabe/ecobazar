import products from "../products.ts";
import ProductCard from "./ProductCard.tsx";
import {useSearchParams} from "react-router-dom";

function Products() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <div className="my-16 flex flex-col gap-3">
            {category && <h2 className="font-bold text-3xl"> {category}</h2>}
            <section className="flex flex-wrap ">
                {
                    products
                        .filter(product => (category === null || product.category === category))
                        .map((p, i) => (
                            <ProductCard product={p} key={i}/>))
                }
            </section>
        </div>

    )
}

export default Products
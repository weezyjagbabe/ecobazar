import {Product} from "../types.ts";
import {Link} from "react-router-dom";
import {FiEdit} from "react-icons/fi";

function ProductCard({product}: { product: Product }) {
    return (
        <Link to={`${product.id}/edit`}>
            <div
                className="group h-[327px] w-full sm:w-[256px] border relative hover:border-green-500 hover:shadow transition-all">
                <div className="h-[210px] w-[246px] m-1">
                    <img src="/apple.png" alt='apple' className="object-cover object-center"/>
                    {product.on_special && (
                        <span
                            className="text-xs text-red-50 bg-red-500 p-1 rounded absolute top-2 left-2"> Special </span>)}
                    {product.can_expire && (
                        <span
                            className="text-xs text-zinc-600 p-1 rounded absolute top-2 right-2"> <em>Exp</em>: {product.expiry_date}</span>
                    )}
                </div>
                <span className="p-3">{product.category}</span>
                <div className="p-3 flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <span className="text-sm text-[#4D4D4D]">{product.name}</span>
                        <span className="font-bold"> £ {product.price} </span>
                    </div>

                    <span
                        className='p-2 rounded-full flex items-center justify-center bg-gray-300 group-hover:bg-green-500 group-hover:text-white transition-all'>
                        <FiEdit/>
                    </span>

                </div>
            </div>
        </Link>
    )
}

export default ProductCard
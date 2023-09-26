import InputField from "../../components/InputField.tsx";
import SelectInput from "../../components/SelectInput.tsx";
import categories from "../../Categories.ts";
import TextAreaInput from "../../components/TextAreaInput.tsx";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Product} from "../../types.ts";
import CheckboxInput from "../../components/CheckboxInput.tsx";
import {v4 as uuidv4} from 'uuid';
import {useNavigate, useParams} from "react-router-dom";
import products from "../../products.ts";
import toast from "react-hot-toast";

const categoryOption = categories.map(c => ({key: c, value: c}));

function AddProduct() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [productIndex, setProductIndex] = useState(-1)
    const [product, setProduct] = useState<Product>({
        id: uuidv4(),
        name: '',
        price: 0,
        description: '',
        on_special: false,
        category: '',
        expiry_date: '',
        can_expire: false,
        image_url: ''
    });

    useEffect(() => {
        if (!id) return;
        const prod = products.find(product => product.id === id);
        if (!prod) {
            throw new Error('Invalid product id')
        }
        setProductIndex(products.indexOf(prod))
        setProduct(prod);
    }, [id])

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        //console.log(product);
        const {name, value} = event.target;
        //console.log(name, value);
        setProduct({...product, [name]: value} as Product);
        //console.log(product);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!id) {
            products.push(product)
            navigate('/', {replace: true})
            return toast.success('Product added successfully')
        }
        products[productIndex] = product;
        navigate('/', {replace: true})
        toast.success('Product updated successfully')
    }

    function handleDeleteProduct() {
        products.splice(productIndex, 1)
        navigate('/', {replace: true})
        toast.success('Product deleted successfully')
    }

    return (
        <div className="flex flex-col max-w-3xl sm:mx-auto my-24 mx-4">
            {id && <button
                onClick={handleDeleteProduct}
                className="p-2 bg-red-600 hover:bg-red-700 text-red-50 font-medium text-sm mb-8 place-self-end"> Delete
                this
                product
            </button>}
            <form onSubmit={handleSubmit} id="product-form" className=" flex flex-col gap-3 accent-green-600">

                <InputField label='Product name' name="name" value={product?.name} onChange={handleChange}/>

                <InputField label='Price (£)' name="price" type="number" value={product?.price} min={0.1} step={0.01}
                            onChange={handleChange}/>

                <CheckboxInput label='Can expire?' name="can_expire" checked={product?.can_expire} type="checkbox"
                               onChange={(e) => setProduct(p => ({...p, [e.target.name]: !p.can_expire}))}/>

                {product.can_expire &&
                    <InputField label='Expiry date' name="expiry_date" type="date" value={product?.expiry_date}
                                min={new Date().toISOString().split("T")[0]} onChange={handleChange}/>}

                <SelectInput label="Category" name="category" options={categoryOption} value={product?.category}
                             onChange={handleChange}/>

                <TextAreaInput label="Description" name="description" value={product?.description}
                               onChange={handleChange}/>

                <CheckboxInput label='On special?' name="on_special" checked={product?.on_special} type="checkbox"
                               onChange={(e) => setProduct(p => ({...p, [e.target.name]: !p.on_special}))}/>

            </form>

            <button form="product-form"
                    className="p-4 bg-green-600 hover:bg-green-700 text-white font-medium text-lg w-full mt-8">
                {id ? "Save changes" : "Add product"}
            </button>

        </div>
    );
}

export default AddProduct;
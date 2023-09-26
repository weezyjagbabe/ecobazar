interface CategoryProps {
    image: string;
    name: string;
}

function CategoryCard({image, name}: CategoryProps) {
    return (
        <div className="w-50 h-52 pt-4 pb-6 flex flex-col gap-4 border border-[E6E6E6]">
            <div>
                <img src={image} alt={name}/>
            </div>
            <span>{name}</span>
        </div>
    )
}

export default CategoryCard
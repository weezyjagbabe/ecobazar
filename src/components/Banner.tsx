const services = [
    {
        svg: '/icons/freeDelivery.svg',
        name: 'Free Shipping',
        description: 'Free shipping on all your order'
    },
    {
        svg: '/icons/support.svg',
        name: 'Customer Support 24/7',
        description: 'Instant access to Support'
    },
    {
        svg: '/icons/securePayment.svg',
        name: '100% Secure Payment',
        description: 'We ensure your money is save'
    },
    {
        svg: '/icons/refund.svg',
        name: 'Money-Back Guarantee',
        description: '30 Days Money-Back Guarantee'
    },
]

function Banner() {
    return (
        <section>
            <div className="my-6 flex gap-6">
                <div>
                    <img src="/bigBanner.png" alt="big banner"/>
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <img src="/smBanner1.png" alt="small banner"/>
                    </div>
                    <div>
                        <img src="/smBanner1.png" alt="small banner"/>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-wrap gap-6 justify-between items-center bg-white border shadow rounded-lg p-4 sm:p-10 m-2 sm:m-0">
                {
                    services.map((service, i) => (
                        <div key={i} className="flex items-center justify-center gap-4">
                            <div className="h-10 w-10">
                                <img src={service.svg} alt={service.name}/>
                            </div>

                            <div className="flex flex-col items-start">
                                <span className="font-bold">{service.name}</span>
                                <span className="text-gray-400 text-sm">{service.description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Banner
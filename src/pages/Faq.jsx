const Faq = () => {
    return (
        <section className="">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How can I purchase/download the book?</summary>
                        <div className="px-4 pb-4">
                            <p>This question addresses the process of acquiring the book, whether it's through online platforms, physical stores, or directly from the author's website.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is the book about?</summary>
                        <div className="px-4 pb-4">
                            <p>This question provides a brief overview or summary of the book's content, allowing potential readers to understand its themes, genre, and main plot points.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Is there an option for international shipping?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>For online bookstores, this question is crucial for customers outside the book's home country. It addresses whether the site offers international shipping and any associated costs or delivery times.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;
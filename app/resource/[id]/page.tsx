"use client"
import Image from "next/image";

import { getResourceById } from "@/sanity/actions";
import Navbar from "@/components/Navbar";

export const revalidate = 900;

const page = async ({params}:{params:{id:string}}) => {
    const resource = await getResourceById({
        id: params.id || '',
    })
   
    
    return (
        <div className="idpage">
            <Navbar />
            <main className="flex-center paddings mx-auto w-full max-w-8xl flex-col text-white">
            <section className="nav-padding hero-height flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
                <div className="flex flex-1 flex-col items-start justify-center">
                    <p className="text-gradient_blue body-regular mb-2.5 text-center uppercase">
                        Javascript Mastery Pro Free Guide
                    </p>
                    <h1 className="sm:heading2 heading3">
                        {resource.title}
                    </h1>
                    <div className="mt-6 space-y-4 text-[20px] text-white-800">
                        <p>
                            Explore this comprehensive guide, designed to provide you with
                            valuable insights and practical knowledge.
                        </p>
                        <p>
                            Whether you're a beginner or an experienced developer, this resource
                            covers key concepts, tips, and best practices to enhance your skills.
                        </p>
                        <p>Dive in now and take your expertise to the next level!</p>
                    </div>
                    <div>
                        <a
                            target="_blank"
                            className="gradient_purple flex-center body-semibold mt-10 h-fit w-fit gap-1 rounded-md px-6 py-4"
                            href={resource.downloadLink}
                        >
                            Download the Guide
                        </a>
                        <div className="relative ml-28 mt-6 hidden h-[218px] w-[425px] lg:flex">
                            <Image
                                alt="arrow"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                src="/assets/resources/images/arrow_trail.svg"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: 0,
                                    color: "transparent"
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center lg:mb-12 lg:justify-end lg:pr-12">
                    <Image
                        alt="ebook image"
                        loading="lazy"
                        width={370}
                        height={470}
                        decoding="async"
                        className="rounded-lg object-contain lg:rotate-12"
                        src={resource.image}
                        style={{ color: "transparent" }}
                    />
                </div>
            </section>
        </main>
        </div>

    )
}

export default page
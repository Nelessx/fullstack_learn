"use client"

import Image from 'next/image'
import SpotlightCard from '@/components/ui/spotlightCard'
import { Facebook, Instagram, Linkedin, MapPin, SquareArrowOutUpRight, TwitterIcon } from 'lucide-react'
import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"




export default function FeedRight() {


    return (
        <div className='flex flex-col gap-6 tracking-wide'>

            <SpotlightCard className="custom-spotlight-card flex flex-col gap-4  " spotlightColor="rgba(255, 255, 255, 0.2)" >
                <p className=' font-semibold text-white/80 text-xs'>ABOUT</p>
                <div className=' flex gap-3 items-center'>
                    <Image className=' rounded-full' src="/cat.jpg" alt='image' height={50} width={50} />
                    <div className='space-y-1'>
                        <p className='text-lg font-semibold text-white/80 '>Ethan Caldwell</p>
                        <p className=' text-xs text-white/60 font-semibold '>REFLECTIVE BLOGGER</p>
                    </div>
                </div>
                <p className=' text-white/80  leading-6'>Ethan Caldwell shares thoughtful insights and reflections on life, culture, and personal growth. His work explores the intersections of creativity and experience, offering readers unique perspectives.</p>
                <div className=' flex gap-2 text-white/80 font-semibold'>
                    <MapPin />
                    <p>Paris, France</p>
                </div>
                <div className=' flex gap-4 text-white/80 '>
                    <TwitterIcon />
                    <Facebook />
                    <Instagram />
                    <Linkedin />
                </div>
            </SpotlightCard>

            <div>
                <div className="mx-auto max-w-xs">
                    <Carousel>
                        <CarouselContent >
                            <CarouselItem><Image className=' rounded-lg' src="/cat.jpg" alt='image' height={700} width={700} /></CarouselItem>
                            <CarouselItem><Image className=' rounded-lg' src="/cat.jpg" alt='image' height={700} width={700} /></CarouselItem>
                            <CarouselItem><Image className=' rounded-lg' src="/cat.jpg" alt='image' height={700} width={700} /></CarouselItem>
                            <CarouselItem><Image className=' rounded-lg' src="/cat.jpg" alt='image' height={700} width={700} /></CarouselItem>
                            <CarouselItem><Image className=' rounded-lg' src="/cat.jpg" alt='image' height={700} width={700} /></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                </div>
            </div>

            <SpotlightCard className="custom-spotlight-card flex flex-col  " spotlightColor="rgba(255, 255, 255, 0.2)" >
                <p className=' font-semibold text-white/80 text-xs'>WORK EXPERIENCE</p>
                <div>
                    <div className=' flex flex-col gap-2 border-b py-4  '>
                        <div className=' flex justify-between items-center'>
                            <p className='text-lg font-semibold text-white/80 '>Product Designer</p>
                            <p className='text-white/70 text-sm'>2022 — Now</p>

                        </div>
                        <p>Pioneer</p>
                    </div>
                    <div className=' flex flex-col gap-2 border-b py-4  '>
                        <div className=' flex justify-between items-center'>
                            <p className='text-lg font-semibold text-white/80 '>Product Designerr</p>
                            <p className='text-white/70 text-sm'>2020 — 2022</p>

                        </div>
                        <p>Digital</p>
                    </div>
                    <div className=' flex flex-col gap-2  pt-4  '>
                        <div className=' flex justify-between items-center'>
                            <p className='text-lg font-semibold text-white/80 '>UX/UI Designer</p>
                            <p className='text-white/70 text-sm'> 2017 — 2020</p>

                        </div>
                        <p>Digital</p>
                    </div>
                </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card flex flex-col gap-5 " spotlightColor="rgba(300, 300, 300, 0.1)">
                <p className=' font-semibold text-white/80 text-xs'>TECHNOLOGIES    </p>
                <div className=' flex gap-4'>
                    <div className=' w-30  flex items-center justify-around'><Image src="/figma.webp" className=' w-auto  rounded-lg' height={50} width={50} alt='image' /></div>
                    <div className=' '>
                        <p className='text-lg font-semibold text-white/80 '>Figma</p>
                        <p className='  text-white/70 text-sm'>Collaborate and design interfaces in real-time.    </p>

                    </div>
                </div>
                <div className=' flex gap-4'>
                    <div className=' w-30  flex items-center justify-around'><Image src="/notion.webp" className=' w-auto  rounded-lg' height={50} width={50} alt='image' /></div>
                    <div className=' '>
                        <p className='text-lg font-semibold text-white/80 '>Notion</p>
                        <p className='  text-white/70 text-sm'>Collaborate and design interfaces in real-time.    </p>

                    </div>
                </div>
                <div className=' flex gap-4'>
                    <div className=' w-30  flex items-center justify-around'><Image src="/ps.webp" className=' w-auto  rounded-lg' height={50} width={50} alt='image' /></div>
                    <div className=' '>
                        <p className='text-lg font-semibold text-white/80 '>Photoshop</p>
                        <p className='  text-white/70 text-sm'>Collaborate and design interfaces in real-time.    </p>

                    </div>
                </div>
                <div className=' flex gap-4'>
                    <div className=' w-30  flex items-center justify-around'><Image src="/ai.webp" className=' w-auto  rounded-lg' height={50} width={50} alt='image' /></div>
                    <div className=' '>
                        <p className='text-lg font-semibold text-white/80 '>Illustrator</p>
                        <p className='  text-white/70 text-sm'>Collaborate and design interfaces in real-time.    </p>

                    </div>
                </div>

            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card space-y-4 " spotlightColor="rgba(300, 300, 300, 0.1)">
                <p className=' font-semibold text-white/80 text-xs'>CREATING    </p>
                <div className=' space-y-1 '>
                    <div className=' flex gap-1 items-center hover:text-blue-400 cursor-pointer'>
                        <p className='text-lg font-semibold text-white/80  hover:text-white'>Heartfelt Reflections </p>
                        <SquareArrowOutUpRight className=' size-4' />
                    </div>
                    <p className='  text-white/70 text-sm'>A deep dive into emotional experiences and personal growth, sharing valuable insights on life&apos;s most meaningful moments.</p>
                </div>
                <div className=' space-y-1 '>
                    <div className=' flex gap-1 items-center hover:text-blue-400 cursor-pointer'>
                        <p className='text-lg font-semibold text-white/80  hover:text-white'>Latest Tech Gadgets </p>
                        <SquareArrowOutUpRight className=' size-4' />
                    </div>
                    <p className='  text-white/70 text-sm'>Explore the newest and most innovative technology products hitting the market, from smart devices to cutting-edge tools.</p>
                </div>
                <div className=' space-y-1 '>
                    <div className=' flex gap-1 items-center hover:text-blue-400 cursor-pointer'>
                        <p className='text-lg font-semibold text-white/80  hover:text-white'>Trends for 2024 </p>
                        <SquareArrowOutUpRight className=' size-4' />
                    </div>
                    <p className='  text-white/70 text-sm'>A look ahead at the emerging trends that will shape the world in 2024, from lifestyle shifts to groundbreaking innovations.</p>
                </div>

            </SpotlightCard>


        </div>
    )
}

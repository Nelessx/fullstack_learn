"use client"

import Image from 'next/image'
import React from 'react'

// type Cards = {

// }

const cards = [
    {
        id: 101,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: '/feed (1).jpg'
    },
    {
        id: 102,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: '/feed (2).jpg'
    },
    {
        id: 103,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: '/cat.jpg'
    },
    {
        id: 104,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: "/cat.jpg"
    },
    {
        id: 105,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: '/feed (2).jpg'
    },
    {
        id: 106,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: '/cat.jpg'
    },
    {
        id: 107,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: "/cat.jpg"
    },
    {
        id: 108,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: '/feed (2).jpg'
    },
    {
        id: 109,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: '/cat.jpg'
    },
    {
        id: 110,
        title: 'How Tech Shapes the Future of Work in 2024',
        author: "canabella chamling",
        date: 'October 16, 2024',
        description: 'In today’s ever-evolving world, storytelling has become a powerful tool for connection...',
        categories: ['BUSINESS', 'NEWS'],
        image: "/cat.jpg"
    },
];





export default function FeedLeft() {
    return (
        <div className=' flex flex-col  '>
            {
                cards.map((card, index) => (
                    <div key={index} className=' flex gap-4 border-b-2 py-8 '>
                        <div className=' rounded-3xl w-9/12 h-72 overflow-hidden flex items-center '>
                            <Image src={card.image} className=' h-fit w-fit ' height={1000} width={1000} alt='image' />

                        </div>
                        <div className=' rounded-r-3xl h-72 p-2 pb-4 flex flex-col justify-between'>
                            <div className=' flex flex-col gap-3'>
                                <div className=' flex gap-2 items-center '>
                                    <p className=' text-white/80 font-semibold text-lg '>{card.author}</p>
                                    <p className=' text-white/70 text-sm'>{card.date}</p>
                                </div>
                                <p className=' text-white/90 font-semibold text-2xl'>{card.title}</p>
                                <p className=' text-white/60 text-sm'>{card.description}</p>
                            </div>
                            <button className=' bg-slate-600   hover:bg-gradient-to-tr hover:from-blue-800 hover:to-red-800 transition-colors duration-1000  px-6 py-2 w-44 rounded-lg text-white/80 font-semibold text-lg'>Discover More</button>
                        </div>
                    </div>
                    
                    
                ))
                
            }
        </div>
    )
}

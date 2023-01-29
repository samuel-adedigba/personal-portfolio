import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({ selectedPage, setSelectedPage }) => {

    const selected = `relative bg-pink before:absolute before:w-6 before:h-6 before:rounded-full before:border-2
        before: border-pink before:left-[-50%] before:top-[-50%]
    `

    return (
        <div className='flex flex-col gap-6 fixed top-[60%] right-7' >
            <AnchorLink
                className={`${selectedPage === 'home' ? selected : " bg-purple"}
                    w-3 h-3 rounded-full
                `}
                href="#home"
                onClick={() => { setSelectedPage('home') }}
            />
            <AnchorLink
                className={`${selectedPage === 'aboutme' ? selected : " bg-purple"}
                    w-3 h-3 rounded-full
                `}
                href="#aboutme"
                onClick={() => { setSelectedPage('aboutme') }}
            />
            <AnchorLink
                className={`${selectedPage === 'skills' ? selected : " bg-purple"}
                    w-3 h-3 rounded-full
                `}
                href="#skills"
                onClick={() => { setSelectedPage('skills') }}
            />
            <AnchorLink
                className={`${selectedPage === 'projects' ? selected : " bg-purple"}
                    w-3 h-3 rounded-full
                `}
                href="#projects"
                onClick={() => { setSelectedPage('projects') }}
            /><AnchorLink
            className={`${selectedPage === 'contact' ? selected : " bg-purple"}
                w-3 h-3 rounded-full
            `}
            href="#contact"
            onClick={() => { setSelectedPage('contact') }}
        />
        </div>
    )
}

export default DotGroup
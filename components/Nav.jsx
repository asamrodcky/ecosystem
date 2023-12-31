"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react'

const Nav = () => {
  const isUserLoggedIn = true; 

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flext gap-2 flex-center">
            <Image
                src="/assets/images/logo.svg"
                alt="Promptopia Logo"
                width={30}
                height={30}
                className="object-contain" 
            />
            <p className="logo_text">Promptopia</p>

        </Link>

        {/* <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" 
                    className="black_btn">
                        Create Post
                    </Link>

                    <button type="button" 
                    className="outline_btn">
                        Sign Out
                    </button>

                    <Link href="/profile">
                        <Image
                            src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                        />
                    </Link>

        </div> */}
        <Link href="todo" className="flex gap-3 md:gap-5">
            ToDo App
        </Link>
        <Link href="clickygame" className="flex gap-3 md:gap-5">
            clickyGame
        </Link>
        <Link href="chatsockets" className="flex gap-3 md:gap-5">
            chatsockets
        </Link>
        <Link href="desmosbuilds" className="flex gap-3 md:gap-5">
            clickyGame
        </Link>
    </nav>
  )
}

export default Nav
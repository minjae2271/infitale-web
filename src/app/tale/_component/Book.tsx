'use client'

import { redirect } from 'next/navigation';
import { useRecoilState, useRecoilValue } from "recoil"
import { storyState, pictureState } from "@/app/recoil/atoms";
import { useEffect } from 'react';


type Props = {
    children: React.ReactNode
}

export default function Book({ children }: Props) {
    const story = useRecoilValue(storyState);

    const [picture, setPicture] = useRecoilState(pictureState);

    useEffect(() => {
        async function fetchPicure() {
            try {
                const res = await fetch('/api/picture', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      text: story.title
                    })
                  });
            
                  if (res.ok) {
                    const resData = await res.json()
                    console.log(resData)
                    console.log(picture)
                    const url = resData?.data[0].url
                    console.log(url)
                    setPicture((prev) => [...prev, {url: url}])
                  } else {
                    throw new Error("creating picture failed");
                  }
            } catch(err) {
                console.error(err)
            } finally {
                console.log("pic", picture)
            }
        }
        fetchPicure();
    }, [])

    if (!story.title) {
        redirect('/')
    }

    return (
        <>
            {children}
        </>
    )
}
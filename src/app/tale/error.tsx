'use client'

type Props = {
 error: Error
}

export default function Error({error}: Props) {
    console.log(error);
    return (
        <>
            <div>Error occured!</div>
        </>
    )
    
}
import React, { useState } from 'react';
import Link from 'next/link';

export default function Card() {
    const [cardItem, setCardItem] = useState([]);

    return (
        <div>
            <Link href="/diet">
                <a >תזונה</a>
            </Link>
            <Link href="/children-food">
                <a >אוכל לילדים</a>
            </Link>
            <Link href="/sport">
                <a >ספורט</a>
            </Link>
            <Link href="/vegan-makeup">
                <a >איפור טבעוני</a>
            </Link>
            <Link href="/garden">
                <a >גינה במרפסת</a>
            </Link>
            <Link href="/talk-health-blog">
                <a >מתקשקשים בריאות</a>
            </Link>
      
        </div >
    );
}
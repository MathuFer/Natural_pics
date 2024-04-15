import React, { useContext, useState } from "react";
import { FotosFavoritas } from "../assets/context/fotosfavoritas";
import { FaHeart } from 'react-icons/fa';

export default function Foto({ src, alt }) {
    const [liked, setLiked] = useState(false);
    const { data, setData } = useContext(FotosFavoritas);

    const handleLike = () => {
        if (!liked) {
            setData([...data, { src: src.large, alt: alt }]);
        } else {
            const newData = data.filter(item => item.src !== src.large);
            setData(newData);
        }
        setLiked(!liked);
    }

    const isFavorited = data.some(item => item.src === src.large);

    const divStyle = {
        backgroundImage: `url(${src.large})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div style={divStyle}>
            <div className="card">
                <div className="like" onClick={handleLike}>
                    <FaHeart color={isFavorited ? "red" : "white"} size={25} />
                </div>
                <div className="nombre">
                    {alt}
                </div>
            </div>
        </div>
    );
}

import { useNavigate } from 'react-router-dom';
import  './index.scss';
import { useEffect } from 'react';




export default function NotFound(){

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    },[])

    return (

        <div className="notFound">
            <img src="/assets/images/notFound.webp" alt="" />
        </div>

    )
}
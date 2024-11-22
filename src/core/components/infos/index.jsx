import { Link } from 'react-router-dom';
import './index.scss';



export default function Infos({imagem, titulo, descricao, link, caminho}){



    return(

        <div className='comp-serviso'>

            <div className='img-serviso'>

                <img src={imagem} alt="" loading="lazy"/>

            </div>

            <div className='descricao-serviso'>

                <h1>{titulo}</h1>

                <p>{descricao}</p>

                <Link className='link-info' to={link} onClick={() => window.scrollTo(0, 0)}>
                    <div className='ver-mais-servisos'>
                        <h2>{caminho}</h2>
                    </div>
                </Link>

            </div>

        </div>

    )
} 
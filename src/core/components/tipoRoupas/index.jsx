import './index.scss';
import { Link } from 'react-router-dom';

import 'aos/dist/aos.css';
import aos from 'aos';

export default function TipoRoupas(){
  
  aos.init()





    return (

      <div className='roupas'>

        <div className='tipos-roupas'>

          <div className='ellipses' data-aos="zoom-in">

            <div className='tipo-roupa'>
                <img className='ellipse1' src="/assets/images/Ellipse1.png"/>
              <Link to='/camisetas'>
                <h2 className='tipo1'>Camisetas</h2>
              </Link>
            </div>

            <div className='tipo-roupa'>
                <img className='ellipse2' src="/assets/images/Ellipse2.png"/>
              <Link to='/moletons'>
                <h2 className='tipo2'>Moletons</h2>
              </Link>
            </div>

            <div className='tipo-roupa'>
                <img className='ellipse3' src="/assets/images/Ellipse3.png"/>
              <Link to='/calcas'>
                <h2 className='tipo3'>Calças</h2>
              </Link>
            </div>

          </div>

        </div>

        </div>

    )
}
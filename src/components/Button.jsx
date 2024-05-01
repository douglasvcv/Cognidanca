import style from './Button.module.css'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

function Button(){
    useEffect(() => {
        AOS.init({
          duration: 3000, // Duração das animações em milissegundos
          easing: 'ease-in-out', // Tipo de easing das animações
          once:true
        });
      }, []);
    return(
        <div className={style.button_container}>
        <a className={style.button_link} data-aos="fade-right" href="https://pay.hotmart.com/O87511025E?off=ecia4tfb&fbclid=PAAaYLwOIjhHEu04O5E0gh_aqhwvYLF84Xc5Q7YFIHbBb9BrtIJS24tU3sOu4&bid=1714438785114" target="blank">
            Curso de Cognidança para profissionais</a>
        <a data-aos="fade-left" href="https://api.whatsapp.com/qr/BWRSBLWS7VCXC1?autoload=1&app_absent=0" target="blank">
            Agende sua aula
        </a>
        </div>
    )
}

export default Button
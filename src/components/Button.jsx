import style from './Button.module.css'

function Button(){
    return(
        <div className={style.button_container}>
        <a href="https://pay.hotmart.com/O87511025E?off=ecia4tfb&fbclid=PAAaYLwOIjhHEu04O5E0gh_aqhwvYLF84Xc5Q7YFIHbBb9BrtIJS24tU3sOu4&bid=1714438785114" target="blank">
            Curso de Cognidança para profissionais</a>
        <a href="https://api.whatsapp.com/qr/BWRSBLWS7VCXC1?autoload=1&app_absent=0" target="blank">
            Agende sua aula
        </a>
        </div>
    )
}

export default Button
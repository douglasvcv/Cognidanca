import contentPic from '../images/contentPic.png'
import styles from './MidContent.module.css'

function MidContent(){
    return (
        <div className={styles.midContent}>
            <div>
            <h1>Por que dançar?</h1>
            <p>De acordo com estudos científicos, 
            dançar regularmente não só fortalece o corpo,
            mas também melhora a saúde mental e emocional,
            oferecendo uma forma divertida e eficaz de promover o bem-estar</p>
            </div>
        <div>
            <img src={contentPic} width={350} alt="" />
        </div>
        </div>
    )
}

export default MidContent
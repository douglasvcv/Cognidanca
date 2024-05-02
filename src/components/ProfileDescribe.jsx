import { useEffect } from 'react';
import profileImg from '../images/profilePic.png'
import styles from './ProfileDescribe.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProfileDescribe(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duração das animações em milissegundos
          easing: 'ease-in-out', // Tipo de easing das animações
          once:true
        });
      }, []);
      
    return (
        <>
    <div className={styles.aos} data-aos="fade-up">
    
        <div className={styles.profile_container}>
            <div className={styles.first_div}>
            <h1>Quem sou eu?</h1>
            <img className={styles.img} src={profileImg} alt="Foto de perfil"/>
            </div>
            <div className={styles.second_div}>
            <h2>Natália Souza</h2>
            <h3 className={styles.cargo}>Terapeuta Ocupacional</h3>
            <p>Idealizadora do Método Cognidança.</p>
            </div>
      </div>
    </div>
        </>
    )
}

export default ProfileDescribe
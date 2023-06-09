
import styles from './Header.module.css';
import imageLogo from './../assets/Ignite-logo.svg';



export const Header = () => {

  return (

    <>
      <img src={imageLogo} /> 
      <br/>
      <p className={styles.mytitle}>ola projeto</p>
    </>
  )
}

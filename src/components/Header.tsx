
import styles from './Header.module.css';
import imageLogo from './../assets/Ignite-logo.svg';



export const Header = () => {

  return (

    <>
      <div className={styles.header}>
        <img src={imageLogo} /> 
      </div>
    </>
  )
}


import styles from './Header.module.css';
import imageLogo from './../assets/Ignite-logo.svg';



export const Header = () => {

  return (

    <>
      <div className={styles.header}>
        <h1>Gabz.Dev</h1>
        <img src={"https://cdn-icons-png.flaticon.com/128/9867/9867157.png"} /> 
      </div>
    </>
  )
}

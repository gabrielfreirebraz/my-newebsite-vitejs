
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <>
      <aside className={styles.sidebar}>

        <img src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=50" />
        {/* <img src="https://github.com/gabrielfreirebraz.png" /> */}
      </aside>        
    </>
  );
}
import styles from "./loader.module.css"; 

function Loader() {
    return (
        <>
        <div className="main-body flex h-screen flex-col items-center justify-center"> 
          <div class={styles.loader}></div> 
          <p className="mt-2 text-xl text-black dark:text-white">Solving your problem...</p> 
        </div> 
        </>
    );
}
export default Loader; 
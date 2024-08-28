import styles from './NotFound.module.css';

export const NotFoundView = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Ops!
      </h3>

      <p className={styles.description}>

        No encontramos lo que estabas buscando
      </p>
    </div>
  )
}

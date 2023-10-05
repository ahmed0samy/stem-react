import styles from './header.module.css'
function Header () {
return (
  <header className={styles.header}>
    <a href="/">
      Go back to Home
    </a>
  </header>
)
}
export default Header
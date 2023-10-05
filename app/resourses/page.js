import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Item from '@/components/item/Item'
export default function Resourses() {
  return (
  <>
  <Header />
  <div class="welcome">
    <h1>
      Resourses
    </h1>
    <div class="services">
      <h1>Choose the subject....</h1>
      <div class="articles">
        <Item name="Physics" imgSrc="/physics.png" href="https://drive.google.com/drive/folders/1m2QanqhJBkbWnO_n68FJ2ghF54lD5nSU?usp=sharing " isGoogleDrive={true} />
      </div>
    </div>
  </div>
  <Footer />
  </>
  )
}
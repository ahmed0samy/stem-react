import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Item from "@/components/item/Item";

export default function Home() {
  return (
    <>
      <div class="welcome">
        <h1>Welcome...</h1>
        <p>
          Here Class <span>1B</span>
        </p>
        <div class="services">
          <h1>What do you need...?</h1>
          <div class="articles">
            <Item name="Resourses" imgSrc="/file-and-folder.png" href="/resourses"/>
            <Item name="Homeworks" imgSrc="/online-learning.png" isAvailable={false} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

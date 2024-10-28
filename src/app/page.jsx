import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
// import Hero from "hero.png"
export default function Home() {
  return (
    <div className={styles.container} >
     <div className={styles.item}>
      <h1 className={styles.title}>Better Design for your digital product.!</h1>
      <p className={styles.desc}>Turning your idea into Reality. we bring together the teams from the golbal tech industyr.</p>
     <Button text="See Our Work" url="/portfolio"/>
     </div>
     <div className={styles.item}>
      <Image src="/hero.png" width={500} height={500} className={styles.img} alt="hero image"/>
     </div>
    </div>
  );
}

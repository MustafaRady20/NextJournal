import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"

function About() {
  return (
    <div>
      <div className={styles.container}>

        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={styles.img} fill={true} alt="about image" />

          <div className={styles.imgText}>

            <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
            <h2 className={styles.imgDesc}>Handcrafting award winning digital experience</h2>
          </div>

        </div>
        <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title}>Who Are We</h1>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti pariatur eveniet consectetur esse sint
              <br />
              <br />
              voluptatibus accusamus. Similique, eos rerum explicabo officia amet vero saepe! Facilis blanditiis porro atque modi sit

              praesentium vel alias. Sit aspernatur perferendis dolore amet voluptate alias eveniet voluptatibus, fugit esse quis a 

              <br />
              <br />
              repudiandae quam delectus non dignissimos quibusdam consequuntur nulla quis est tempora, accusamus tempore fugit doloribus porro optio accusantium aliquid. Quis voluptates mollitia a unde tempore incidunt illo adipisci, suscipit ullam dolorem laudantium ab officia nihil!</p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>What we do</h1>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti pariatur eveniet consectetur esse sint
              voluptatibus accusamus. Similique, eos rerum explicabo officia amet vero saepe! Facilis blanditiis porro atque modi sit
              praesentium vel alias.
              <br />
              <br />

              - Creative illustrations <br />
              - Dynamic WebSites <br />
              - Fast and handy mobile App <br />
            </p>

            <Button text="Contact" url="/contact" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

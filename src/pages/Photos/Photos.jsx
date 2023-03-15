import styles from './Photos.module.css'

import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img6.jpeg'
import img7 from '../../assets/img7.jpeg'
import img8 from '../../assets/img8.jpeg'


const Photos = () => {
  return (
    <div className={styles.all}>
      <h2>Aqui estão algumas fotos do salão</h2>
      <div className={styles.gallery}>
        <img src={img1}  />
        <img src={img2}  />
        <img src={img3}  />
        <img src={img4}  />
        <img src={img5}  />
        <img src={img6}  />
        <img src={img7}  />
        <img src={img8}  />
      </div>
    </div>
  )
}

export default Photos
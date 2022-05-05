import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Hero = () => {
  return(
    <>
      <PageTitle>
        <h1>My first React App</h1>
      </PageTitle>
      <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
    </>
  );
};

export default Hero;
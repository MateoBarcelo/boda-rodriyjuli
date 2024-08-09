import React from "react";
import styles from "./MainCard.module.css";

interface WeddingInvitationProps {
  names: { first: string; second: string };
}

export const MainCard: React.FC<WeddingInvitationProps> = ({ names }) => {
  return (
    <main className={styles.container}>
      <div className={styles.scrollable}>
        <FirstContent />
        <SecondContent />
        <SecondContent />
      </div>
    </main>
  );
};

const FirstContent: React.FC = () => {
  return (
    <section className={styles.cardContent}>
      <h1 className={styles.title}>Nuestro casamiento</h1>
      <h2 className={styles.names}>Rodrigo</h2>
      <img src="/rings.png" alt="Anillos" className={styles.rings} />
      <h2 className={styles.names}>Juliana</h2>
      <p className={styles.presentationtext}>
        Wishing you both endless joy and love on this beautiful journey as you
        build your new lives together
      </p>
    </section>
  );
};
const SecondContent: React.FC = () => {
    return (
      <section className={styles.cardContent}>
        <h1 className={styles.title}>Nuestro casamiento</h1>
        <h2 className={styles.names}>Rodrigo</h2>
        <img src="/rings.png" alt="Anillos" className={styles.rings} />
        <h2 className={styles.names}>Juliana</h2>
        <p className={styles.presentationtext}>
          Wishing you both endless joy and love on this beautiful journey as you
          build your new lives together
        </p>
      </section>
    );
  };

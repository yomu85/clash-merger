import styles from "./card.module.css";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ICardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cardImage: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Card = ({
  className,
  cardImage,
  onClick,
  children,
  ...props
}: ICardProps) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.95,
        boxShadow: "0 0 20px rgba(34, 197, 94, 0.8)",
        transition: { duration: 0.2 },
      }}
      whileHover={{
        boxShadow: "0 0 15px rgba(34, 197, 94, 0.4)",
      }}
      className={styles["clash-card"]}
      style={props.style}
    >
      {children}
      <Button
        variant="ghost"
        size="icon"
        className={styles["clash-card-button"]}
        onClick={onClick}
      >
        <img src={`/card/${cardImage}.png`} alt="card" />
      </Button>
    </motion.div>
  );
};

export default Card;

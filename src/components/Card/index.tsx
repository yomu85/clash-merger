import styles from "./card.module.css";
import { Button } from "@/components/ui/button";

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
    <div className={styles["clash-card"]} style={props.style}>
      {children}
      <Button
        variant="ghost"
        size="icon"
        className={styles["clash-card-button"]}
        onClick={onClick}
      >
        <img src={`/card/${cardImage}.png`} alt="card" />
      </Button>
    </div>
  );
};

export default Card;

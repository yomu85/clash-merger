import styles from "./tactics.module.css";

interface ITacticsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tacticsImage: string;
}

const Tactics = ({ className, tacticsImage, ...props }: ITacticsProps) => {
  return (
    <div className={styles["clash-tactics"]} style={props.style}>
      <img src={`/src/assets/tactics/${tacticsImage}.png`} alt="tactics" />
    </div>
  );
};

export default Tactics;

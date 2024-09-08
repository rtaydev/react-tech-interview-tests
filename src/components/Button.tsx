import { useMemo } from "react";

interface ButtonProps {
  label: string;
  variants: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

interface VariantStyles {
  color: string;
  backgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ label, variants, onClick }) => {
  const buttonVariants = useMemo<VariantStyles>(() => {
    switch (variants) {
      case "secondary":
        return { color: "blue", backgroundColor: "white" };
      case "danger":
        return { color: "red", backgroundColor: "white" };
      case "primary":
      default:
        return { color: "white", backgroundColor: "blue" };
    }
  }, [variants]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button style={buttonVariants} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;

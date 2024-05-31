type Props = {
  className?: string;
};

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 512000 384000"
      stroke="currentColor"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="384"
    >
      <path d="M4064 44830h125561l133712 159804V45644h244599v123930H388898v296780H263337L129625 304919v162249H4064z" />
    </svg>
  );
};

type Props = {
  className?: string;
  strokeWidth?: number;
};

/**
 * A single-line illustrative mushroom mark used as a placeholder visual
 * across product cards and section motifs until real photography is added.
 * Inherits color via `currentColor` so it can be recolored with text-* classes.
 */
export default function MushroomMark({ className = "", strokeWidth = 1.4 }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 96C40 62 66 32 100 32C134 32 160 62 160 96C160 100 156 103 152 101C138 94 120 90 100 90C80 90 62 94 48 101C44 103 40 100 40 96Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M62 98C62 98 58 118 58 132C58 148 70 158 78 158"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M138 98C138 98 142 118 142 132C142 148 130 158 122 158"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M84 96V160C84 166 91 170 100 170C109 170 116 166 116 160V96"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 74C68 66 84 62 100 62C116 62 132 66 144 74"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.75}
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

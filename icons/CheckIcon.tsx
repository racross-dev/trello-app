function CheckIcon({
  className,
  ...restProps
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <svg
      {...restProps}
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-check ${className || ""}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

export default CheckIcon;

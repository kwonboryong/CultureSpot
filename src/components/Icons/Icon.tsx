import { ICON_PATHS } from 'src/constants/iconsPaths';
import { cn } from 'src/lib/utils';

type IconName = keyof typeof ICON_PATHS;

export default function Icon({
  name,
  size,
  className,
}: {
  name: IconName;
  size: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      strokeLinecap='round'
      strokeLinejoin='round'
      fillRule='evenodd'
      clipRule='evenodd'
      overflow='visible'
      className={cn('stroke-text stroke-[1.5px]', className)}
    >
      {ICON_PATHS[name].map((path, idx) => (
        <path key={idx} d={path} />
      ))}
    </svg>
  );
}

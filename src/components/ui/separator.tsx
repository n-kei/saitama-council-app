
interface SeparatorProps {
  className?: string;
}

export function Separator({ className = '' }: SeparatorProps) {
  return <hr className={`my-4 border-t border-gray-200 ${className}`} />;
}


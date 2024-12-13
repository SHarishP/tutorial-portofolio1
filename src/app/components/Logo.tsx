// 13.2 Coding Logo.tsx
import Link from "next/link";

const Logo = ({ light = false }) => {
  // Ubah warna logo berdasarkan light prop
  const colorClass = light ? "text-white" : "text-primary"; // default to black
  return (
    <Link href="/" className="font-primary text-2xl tracking-[4px]">
      <span className={colorClass}>Noah Jameson</span>
    </Link>
  );
};

export default Logo;

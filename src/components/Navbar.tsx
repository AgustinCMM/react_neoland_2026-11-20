interface NavbarProps {
  totalLikes: number;
}

export function Navbar({ totalLikes }: NavbarProps) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">☕ Mi Cafetería</span>
      <span className="text-white">❤️ {totalLikes}</span>
    </nav>
  );
}
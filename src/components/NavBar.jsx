export default function Navbar({ menu }) {
  return (
    <nav className="bg-blue-500 text-white px-8 py-5 flex justify-between items-center">
      <ul className="flex gap-8 font-semibold">
        {menu.map((item, index) => (
          <li key={index} className="hover:underline cursor-pointer">
            <a
              href={item.href}
              className="transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Search here..."
        className="rounded px-4 py-2 text-black"
      />
    </nav>
  );
}

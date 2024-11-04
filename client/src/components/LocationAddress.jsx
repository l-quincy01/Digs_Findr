export default function LocationAddress({ children }) {
  return (
    <a
      className="flex mt-2 font-semibold"
      target="_blank"
      rel="noreferrer"
      href={"https://maps.google.com/?q=" + children}
    >
      {children}
    </a>
  );
}

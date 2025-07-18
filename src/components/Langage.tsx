interface LangageProps {
  name: string;
  logo: string;
}

export default function Langage({ name, logo }: LangageProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-24">
      <img src={logo} alt={name} className="w-12 h-12 object-contain" />
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  );
}

type Props = { title: string };

export default function SectionHeading({ title }: Props) {
  return (
    <div className="inline-flex flex-col items-start">
      <h2 className="m-0 text-[21px] font-bold tracking-[-0.5px]">{title}</h2>
      <span className="mt-1 h-0.5 w-[21px] bg-blue-600" />
    </div>
  );
}

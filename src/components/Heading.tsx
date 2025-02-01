type HeadingProps = {
  title: string;
  icon: JSX.Element;
  className?: string;
};

const Heading = (props: HeadingProps) => {
  return (
    <h2 className="md:text-2xl text-xl tracking-wide mb-5 flex items-center gap-2 font-light">
      {props.icon}
      <span>{props.title}</span>
    </h2>
  );
};

export default Heading;

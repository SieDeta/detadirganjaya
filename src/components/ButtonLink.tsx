type ButtonLinkProps = {
  link: string;
  text: string;
  icon: JSX.Element;
};

const ButtonLink = (button: ButtonLinkProps) => {
  return (
    <div>
      <a
        href={button.link}
        className="text-sm flex gap-2 items-center btn-primary capitalize"
      >
        {button.icon}
        <span className="mt-[1px]">{button.text}</span>
      </a>
    </div>
  );
};
export default ButtonLink;

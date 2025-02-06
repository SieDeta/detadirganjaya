type ButtonLinkProps = {
  link: string;
  text: string;
  icon: JSX.Element;
};

const ButtonLink = (button: ButtonLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!button.link) {
      e.preventDefault();
      alert("Sorry, not available yet");
    }
  };

  return (
    <div>
      <a
        href={button.link || "#"}
        onClick={handleClick}
        className="text-sm flex gap-2 items-center btn-primary capitalize"
      >
        {button.icon}
        <span className="mt-[1px]">{button.text}</span>
      </a>
    </div>
  );
};

export default ButtonLink;

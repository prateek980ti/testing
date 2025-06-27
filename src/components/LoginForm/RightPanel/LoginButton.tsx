type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

  const LoginButton: React.FC<Props> = ({ children, onClick }) => {
    return (
      <button
        type="submit"
        onClick={onClick}
        className="w-[143px] px-1 py-3 rounded-xl font-semibold  text-primaryA bg-primaryB"
      >
        {children}
      </button>
    );
  };

  export default LoginButton;

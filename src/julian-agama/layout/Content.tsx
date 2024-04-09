interface Props {
  children: React.ReactNode;
}

const Content = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mt-12">
      {children}
    </div>
  );
};

export default Content;

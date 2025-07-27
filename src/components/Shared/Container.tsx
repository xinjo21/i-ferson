const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} border border-blue-100 bg-white shadow shadow-blue-100 rounded-2xl p-4`}
    >
      {children}
    </div>
  );
};

export default Container;

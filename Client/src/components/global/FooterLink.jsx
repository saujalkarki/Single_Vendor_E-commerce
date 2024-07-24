export function FooterLink({ children, h1Data, p1Data, p2Data, p3Data }) {
  return (
    <>
      <div>
        <h1 className=" text-xl font-medium cursor-default pb-2">{h1Data}</h1>
        <p className="cursor-pointer">{p1Data}</p>
        <p className="cursor-pointer">{p2Data}</p>
        <p className="cursor-pointer">{p3Data}</p>
        {children}
      </div>
    </>
  );
}

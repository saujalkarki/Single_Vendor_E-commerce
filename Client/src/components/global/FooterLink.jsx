export function FooterLink({ children, h1Data, p1Data, p2Data, p3Data }) {
  return (
    <>
      <div>
        <h1 className=" text-xl font-medium">{h1Data}</h1>
        <p>{p1Data}</p>
        <p>{p2Data}</p>
        <p>{p3Data}</p>
        {children}
      </div>
    </>
  );
}

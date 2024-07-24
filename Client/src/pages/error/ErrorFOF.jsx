import { Link } from "react-router-dom";
import { Header, NavBar, Footer } from "../../components/index";

export function ErrorFOF() {
  return (
    <>
      <Header />
      <NavBar />
      <section>
        <div className="flex flex-col gap-4 items-center my-52">
          <h1 className=" text-4xl text-center font-semibold">404 NOT FOUND</h1>
          <p className=" text-center font-semibold">
            Your visited page not found. You may go home page.
          </p>
          <Link
            to="/"
            className=" border-none bg-red-500 text-white py-3 px-4 rounded-sm cursor-pointer mt-3 text-center font-medium"
          >
            Back to home page
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

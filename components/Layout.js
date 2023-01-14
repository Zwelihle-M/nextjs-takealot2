import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Takealot from "../public/Takealot Logo.svg";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../utils/Store";
import { signOut, useSession } from "next-auth/react";
import DropdownLink from "./DropdownLink";
import Footer from "./Footer";



export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  // add to cart showing number
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  // logout
  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };
  return (
    <>
      <div>
        <Head>
          <title>
            {title ? title + " - Takealot2.0" : "Takealot2.0"}Takealot-2.0
          </title>
          <meta name="description" content="next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ToastContainer position="bottom-center" limit={1} />

        <div className=" flex min-h-screen flex-col justify-between">
          <header>
            <nav className="flex h-12 items-center px-4 justify-between shadow-md ">


              <Link href="/" legacyBehavior>
                <Image src={Takealot} alt="Takealot logo" priority />
              </Link>

              <div className="flex items-center space-x-2">
              <Link href="/cart" legacyBehavior>
                  <a>Cart

                    {cartItemsCount > 0 && (
                      <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                        {cartItemsCount}
                      </span>
                    )}
                  </a>
                </Link>

              </div>




              {status === "Loading" ? (
                "loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right  shadow-lg">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>

                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>

                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                // session.user.name
                <Link href="/login">Login</Link>
              )}
            </nav>


          </header>


          <main className="container m-auto mt-4 px-4">{children}
        </main>

          <footer >
            <Footer />
            <p className="items-center"> © Takealot Online (Pty) Ltd.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SideNav } from "../components/side-nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider defaultTheme="light" attribute="class">
        <SideNav />
        <main className="ml-[60px]">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

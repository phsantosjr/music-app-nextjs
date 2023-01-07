import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

interface LayoutProps {
    titulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
        <div className='isolate bg-white'>
            <Meta />
            <Header />
            <main>
            {props.children}
            </main>
            <Footer />
        </div>
    </div>
  );
}
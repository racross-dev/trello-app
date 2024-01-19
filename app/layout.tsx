import Header from "@/components/Header";
import "./globals.css";
import Modal from "@/components/Modal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trello App",
  description: "Una aplicación web de trello, para organizar tareas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_50%_200px,#d5c5ff,transparent)]"></div>
        </div>
        <Header />
        {children}
        <Modal />
      </body>
    </html>
  );
}

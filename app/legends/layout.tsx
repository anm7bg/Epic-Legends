import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Epic Legends - Posts",
    template: "Epic Legends - Posts",
  },
  description: "Explore Epic Legends, your ultimate destination for tales of heroism, mythical sagas, and legendary adventures. Dive into timeless stories, uncover ...",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-[100%] px-[20px] text-center justify-center">
        {children}
      </div>
    </section>
  );
}

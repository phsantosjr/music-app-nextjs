export default function Footer() {
    return (
      <footer className="sticky top-[100vh]">
        <div className="pb-10 text-center">
          <img
            className="mx-auto h-14"
            src="/music-app.png"
            alt="Music APP"
          />
          <p className="mt-5 text-center text-sm leading-6 text-slate-500">
            © 2023 Music APP. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
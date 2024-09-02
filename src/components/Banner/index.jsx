import React from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi internal

const Banner = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Diskon Up TO 80 %
            <strong className="font-extrabold text-red-700 sm:block">
              Hanya Untuk Bulan Agustus !!!
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl leading-relaxed">
            "Kerudung Cantik, Harga Menarik! Beli Sekarang, Gratis Ongkir ke
            Seluruh Indonesia!"
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Gunakan Link untuk navigasi internal */}
            <Link
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              to="/listproduct" // Pastikan route ini sesuai dengan konfigurasi router kamu
            >
              Lihat Product
            </Link>

            {/* Link eksternal dengan atribut rel untuk keamanan */}
            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="https://wa.me/6285707185783?text=Halo%20Admin%2C%20saya%20ingin%20bertanya%20tentang%20produk%20ini."
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat Admin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

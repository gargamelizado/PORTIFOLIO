import React from 'react'

import Card from "./Card"; // ajuste o caminho se necessário

export default function Gallery({ items = [], link }) {
  return (
    <section className="gallery">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {items.length > 0 ? (
          items.map((item, index) => (
            <Card key={index} data={item} link={link} />
          ))
        ) : (
          <p className="text-gray-500">Nenhum item encontrado.</p>
        )}
      </div>
    </section>
  );
}

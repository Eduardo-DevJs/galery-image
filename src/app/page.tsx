"use client";

import { PhotoItem } from "@/components/ItemPhoto";
import { Modal } from "@/components/Modal";
import { photoList } from "@/data/PhotoList";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImagemOfModal] = useState("");

  const openModal = (id: number) => {
    const photo = photoList.find((item) => item.id === id);

    if (photo) {
      setImagemOfModal(photo.url);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">
        Fotos Intergalaticas
      </h1>
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((photo) => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            onClick={() => openModal(photo.id)}
          />
        ))}
      </section>

      {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
    </div>
  );
}

const Gallery = () => {
  return (
    <div id="gallery" className="px-4 sm:px-8 py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl cinzel uppercase font-semibold text-center pb-8">
        Explore Our Travel Gallery!
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Card key={i} data={i} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

const Card = ({ data }) => {
  return (
    <div className="w-full h-40 md:h-44 rounded-md overflow-hidden">
      <img
        src={`/gallery/gallery-${data + 1}.jpg`}
        alt="Gallery"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

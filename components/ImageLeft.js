import Image from "next/future/image";

const ImageLeft = ({ src, title }) => {
  return (
    <div className="image-left">
      <div className="left">
        <Image src={src} />
      </div>
      <div className="right">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ImageLeft;

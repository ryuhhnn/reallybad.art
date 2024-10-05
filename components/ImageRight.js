import Image from "next/image";

const ImageRight = ({ src, title }) => {
  return (
    <div className="image-right">
      <div className="left">
        <h2>{title}</h2>
      </div>
      <div className="right">
        <Image src={src} alt="" />
      </div>
    </div>
  );
};

export default ImageRight;

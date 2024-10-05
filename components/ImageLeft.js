import Image from "next/image";

const ImageLeft = ({ src, title, priority = false }) => {
  return (
    <div className="image-left">
      <div className="left">
        <Image src={src} priority={priority} alt="" />
      </div>
      <div className="right">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ImageLeft;

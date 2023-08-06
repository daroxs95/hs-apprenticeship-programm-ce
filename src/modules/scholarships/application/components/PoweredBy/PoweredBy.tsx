import ssheet from "./PoweredBy.module.scss";
import Image from "next/image";

type Props = {
  imageUrl?: string;
  name: string;
};
export const PoweredBy = ({ imageUrl, name }: Props) => {
  return (
    <div className={ssheet.container}>
      {imageUrl && (
        <div className={ssheet.logoContainer}>
          <Image className={ssheet.logo} src={imageUrl} fill alt="" />
        </div>
      )}
      <div className={ssheet.textContainer}>
        <p className={ssheet.label}>Powered by:</p>
        <p className={ssheet.name}>{name}</p>
      </div>
    </div>
  );
};

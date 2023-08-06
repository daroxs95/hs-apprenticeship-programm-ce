import ssheet from "./Title.module.scss";
import Image from "next/image";

type Props = {
  imageUrl?: string;
  title: string;
};
export const Title = ({ imageUrl, title }: Props) => {
  return (
    <div className={ssheet.container}>
      <h1 className={ssheet.title}>{title}</h1>
      {imageUrl && (
        <div className={ssheet.logoContainer}>
          <Image className={ssheet.logo} src={imageUrl} fill alt="" />
        </div>
      )}
    </div>
  );
};

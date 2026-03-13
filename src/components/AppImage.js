import Image from "next/image";

export default function AppImage({ alt = "", ...props }) {
  return <Image alt={alt} {...props} />;
}

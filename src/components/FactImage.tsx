import React, { useMemo } from "react";
import { Layer as CanvasLayer, Stage as CanvasStage } from "react-konva";
import { Image as CanvasImage, Rect as CanvasRect, Text } from "react-konva";
import useImage from "use-image";

export const Correct: React.FC<{ thumbnail: string; text: string }> = ({ thumbnail, text }) => {
  const [imgCover] = useImage("/correct.png");
  const [imgThumbnail] = useImage(
    thumbnail,
  );

  const pos = useMemo(() => {
    if (!imgThumbnail) {
      return;
    }

    const scaleX = 460 / imgThumbnail.width;
    const scaleY = 420 / imgThumbnail.height;
    return {
      image: imgThumbnail,
      scale: {
        x: Math.max(scaleX, scaleY),
        y: Math.max(scaleX, scaleY),
      },
      offset: {
        x: (imgThumbnail.width * Math.max(scaleX, scaleY) - 460) / 2,
        y: (imgThumbnail.height * Math.max(scaleX, scaleY) - 420) / 2,
      },
    };
  }, [imgThumbnail]);

  if (!pos) {
    return <></>;
  }
  return (
    <>
      <CanvasRect
        x={20}
        y={60}
        width={460}
        height={420}
        fillPatternImage={pos.image}
        fillPatternScale={pos.scale}
        fillPatternOffset={pos.offset}
      />
      <CanvasImage image={imgCover} width={960} height={502} />
      <Text
        text={text}
        fill={"#323232"}
        fontSize={28}
        fontFamily={"M PLUS 1p"}
        x={560}
        y={190}
        width={320}
        height={120}
        align={"center"}
      />
    </>
  );
};

export const AlmostCorrect: React.FC<{ thumbnail: string; text: string }> = ({ thumbnail, text }) => {
  const [imgCover] = useImage("/almost_correct.png");
  const [imgThumbnail] = useImage(
    thumbnail,
  );

  const pos = useMemo(() => {
    if (!imgThumbnail) {
      return;
    }

    const scaleX = 460 / imgThumbnail.width;
    const scaleY = 460 / imgThumbnail.height;
    return {
      image: imgThumbnail,
      scale: {
        x: Math.max(scaleX, scaleY),
        y: Math.max(scaleX, scaleY),
      },
      offset: {
        x: (imgThumbnail.width * Math.max(scaleX, scaleY) - 460) / 2,
        y: (imgThumbnail.height * Math.max(scaleX, scaleY) - 460) / 2,
      },
    };
  }, [imgThumbnail]);

  if (!pos) {
    return <></>;
  }
  return (
    <>
      <CanvasRect
        x={20}
        y={20}
        width={460}
        height={460}
        fillPatternImage={pos.image}
        fillPatternScale={pos.scale}
        fillPatternOffset={pos.offset}
      />
      <CanvasImage image={imgCover} width={960} height={502} />
      <Text
        text={text}
        fill={"#323232"}
        fontSize={28}
        fontFamily={"M PLUS 1p"}
        x={560}
        y={190}
        width={320}
        height={120}
        align={"center"}
      />
    </>
  );
};

export const NotCorrect: React.FC<{ thumbnail: string; text: string }> = ({ thumbnail, text }) => {
  const [imgCover] = useImage("/not_correct.png");
  const [imgThumbnail] = useImage(
    thumbnail,
  );

  const pos = useMemo(() => {
    if (!imgThumbnail) {
      return;
    }

    const scaleX = 460 / imgThumbnail.width;
    const scaleY = 460 / imgThumbnail.height;
    return {
      image: imgThumbnail,
      scale: {
        x: Math.max(scaleX, scaleY),
        y: Math.max(scaleX, scaleY),
      },
      offset: {
        x: (imgThumbnail.width * Math.max(scaleX, scaleY) - 460) / 2,
        y: (imgThumbnail.height * Math.max(scaleX, scaleY) - 460) / 2,
      },
    };
  }, [imgThumbnail]);

  if (!pos) {
    return <></>;
  }
  return (
    <>
      <CanvasRect
        x={500}
        y={100}
        width={460}
        height={280}
        fillPatternImage={pos.image}
        fillPatternScale={pos.scale}
        fillPatternOffset={pos.offset}
      />
      <CanvasImage image={imgCover} width={960} height={502} />
      <Text
        text={text}
        fill={"#EBEBEB"}
        fontSize={28}
        fontFamily={"M PLUS 1p"}
        x={90}
        y={190}
        width={320}
        height={120}
        align={"center"}
      />
    </>
  );
};

export const Wrong: React.FC<{ thumbnail: string; text: string }> = ({ thumbnail, text }) => {
  const [imgCover] = useImage("/wrong.png");
  const [imgThumbnail] = useImage(
    thumbnail,
  );

  const pos = useMemo(() => {
    if (!imgThumbnail) {
      return;
    }

    const scaleX = 500 / imgThumbnail.width;
    const scaleY = 500 / imgThumbnail.height;
    return {
      image: imgThumbnail,
      scale: {
        x: Math.max(scaleX, scaleY),
        y: Math.max(scaleX, scaleY),
      },
      offset: {
        x: (imgThumbnail.width * Math.max(scaleX, scaleY) - 500) / 2,
        y: (imgThumbnail.height * Math.max(scaleX, scaleY) - 500) / 2,
      },
    };
  }, [imgThumbnail]);

  if (!pos) {
    return <></>;
  }
  return (
    <>
      <CanvasRect
        x={470}
        y={15}
        width={500}
        height={500}
        fillPatternImage={pos.image}
        fillPatternScale={pos.scale}
        fillPatternOffset={pos.offset}
      />
      <CanvasImage image={imgCover} width={960} height={502} />
      <Text
        text={text}
        fill={"#EBEBEB"}
        fontSize={28}
        fontFamily={"M PLUS 1p"}
        x={90}
        y={190}
        width={320}
        height={120}
        align={"center"}
      />
    </>
  );
};

export type ImageType = "CORRECT" | "ALMOST_CORRECT" | "NOT_CORRECT" | "WRONG";

export const FactImage: React.FC<{
  type: ImageType;
  text: string;
  thumbnail: string;
}> = ({
  type,
  thumbnail,
  text,
}) => {
  return (
    <CanvasStage width={960} height={502}>
      <CanvasLayer>
        {type === "CORRECT" && <Correct thumbnail={thumbnail} text={text} />}
        {type === "ALMOST_CORRECT" && <AlmostCorrect thumbnail={thumbnail} text={text} />}
        {type === "NOT_CORRECT" && <NotCorrect thumbnail={thumbnail} text={text} />}
        {type === "WRONG" && <Wrong thumbnail={thumbnail} text={text} />}
      </CanvasLayer>
    </CanvasStage>
  );
};

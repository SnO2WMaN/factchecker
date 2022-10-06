import clsx from "clsx";
import React, { ChangeEvent, useMemo, useState } from "react";

import { FactImage, ImageType } from "./components/FactImage";

export const App: React.FC = () => {
  const [text, setText] = useState("鴨川って快活CLUBだ");
  const [type, setType] = useState<ImageType>("CORRECT");
  const [rawThumbnailUrl, setThumbnail] = useState<string>(
    "https://jbpress.ismedia.jp/mwimgs/b/d/640wm/img_bd39a69915f83640b4f0d0f469467f0f1324503.jpg",
  );

  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value as ImageType);
  };

  const thumbnailUrl = useMemo(() => {
    return rawThumbnailUrl;
  }, [rawThumbnailUrl]);

  return (
    <div
      className={clsx(
        ["flex", ["flex-col"], ["items-center"]],
        ["mx-auto"],
        ["py-8"],
      )}
    >
      {thumbnailUrl && <FactImage type={type} text={text} thumbnail={thumbnailUrl} />}
      <div className={clsx(["container"], ["max-w-screen-md"])}>
        <div className={clsx(["mt-4"], ["grid", ["grid-cols-2"], ["gap-4"]])}>
          <div className={clsx(["px-4", "py-4"], ["border"], ["shadow"], ["rounded"])}>
            <div className={clsx(["h-full"], ["flex", ["flex-col"], ["items-start"], ["justify-evenly"]])}>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="CORRECT"
                  checked={type === "CORRECT"}
                  onChange={handleRadio}
                >
                </input>
                <span className={clsx(["ml-1"])}>正確</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value={"ALMOST_CORRECT"}
                  checked={type === "ALMOST_CORRECT"}
                  onChange={handleRadio}
                >
                </input>
                <span className={clsx(["ml-1"])}>ほぼ正確</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value={"NOT_CORRECT"}
                  checked={type === "NOT_CORRECT"}
                  onChange={handleRadio}
                >
                </input>
                <span className={clsx(["ml-1"])}>不正確</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value={"WRONG"}
                  checked={type === "WRONG"}
                  onChange={handleRadio}
                >
                </input>
                <span className={clsx(["ml-1"])}>誤り</span>
              </label>
            </div>
          </div>
          <div
            className={clsx(
              ["px-4", "py-4"],
              ["border"],
              ["shadow"],
              ["rounded"],
            )}
          >
            <label
              className={clsx(
                ["flex", "flex-col"],
              )}
            >
              <span>テキスト</span>
              <textarea
                className={clsx(
                  ["mt-2"],
                  ["p-2"],
                  ["border"],
                  ["resize-none"],
                )}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </label>
          </div>
          <div
            className={clsx(
              ["px-4", "py-4"],
              ["border"],
              ["shadow"],
              ["rounded"],
              ["col-span-2"],
            )}
          >
            <label
              className={clsx(
                ["flex", "flex-col"],
              )}
            >
              <span>画像URL</span>
              <input
                className={clsx(
                  ["mt-2"],
                  ["p-2"],
                  ["border"],
                  ["text-sm"],
                  ["font-mono"],
                )}
                value={rawThumbnailUrl}
                onChange={(e) => {
                  setThumbnail(e.target.value);
                }}
              >
              </input>
            </label>
          </div>
        </div>
      </div>
      <footer className={clsx(["mt-4"])}>
        <p>
          要望、バグ報告などは
          <a
            href="https://github.com/SnO2WMaN/factchecker"
            className={clsx(["text-blue-500"], ["underline"])}
          >
            GitHub
          </a>まで。
          <a
            href="https://twitter.com/hashtag/ファクトチェッカ"
            className={clsx(["text-blue-500"], ["underline"])}
          >
            #ファクトチェッカ
          </a>
        </p>
      </footer>
    </div>
  );
};

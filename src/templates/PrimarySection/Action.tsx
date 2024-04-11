"use client";
import { type FC, type HTMLAttributes, useEffect, useState } from "react";
import Button from "@/src/shared/Button";
import Modal from "@/src/shared/Modal";
import { useTranslations } from "next-intl";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const isElementOnScreen = (element: HTMLDivElement) => {
  const bounding = element.getBoundingClientRect();

  console.log(bounding.top, bounding.left, bounding.bottom, bounding.right);
  console.log(window.innerHeight, window.innerWidth);
  return (
    bounding.top >= -300 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 5000 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

const Action: FC<Props> = ({ ...props }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [modalShown, setIsModalShown] = useState<boolean>(false);
  const translate = useTranslations("primary-section");

  useEffect(() => {
    const scrollListener = () => {
      if (
        !isElementOnScreen(
          document.getElementById("primary-image") as HTMLDivElement,
        )
      ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("scroll", scrollListener);

    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div {...props}>
      <Button
        className={classNames({
          "fixed bottom-4 left-4 right-4 lg:left-auto z-50": scrolled,
        })}
        onClick={() => setIsModalShown(true)}
      >
        {translate("button")}
      </Button>
      {modalShown && <Modal setIsShown={setIsModalShown} />}
    </div>
  );
};

export default Action;

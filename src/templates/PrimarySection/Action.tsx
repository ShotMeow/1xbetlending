"use client";
import React, { FC, HTMLAttributes, useState } from "react";
import Button from "@/src/shared/Button";
import Modal from "@/src/shared/Modal";
import { useTranslations } from "next-intl";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Action: FC<Props> = ({ ...props }) => {
  const [modalShown, setIsModalShown] = useState<boolean>(false);
  const translate = useTranslations("primary-section");
  return (
    <div {...props}>
      <Button onClick={() => setIsModalShown(true)}>
        {translate("button")}
      </Button>
      <Button
        className="fixed bottom-4 left-4 right-4 lg:left-auto z-50"
        onClick={() => setIsModalShown(true)}
      >
        {translate("button")}
      </Button>
      {modalShown && <Modal setIsShown={setIsModalShown} />}
    </div>
  );
};

export default Action;

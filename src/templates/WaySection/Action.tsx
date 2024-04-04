"use client";
import React, { FC, useState } from "react";
import Button from "@/src/shared/Button";
import Modal from "@/src/shared/Modal";
import { useTranslations } from "next-intl";

const Action: FC = () => {
  const [modalShown, setIsModalShown] = useState<boolean>(false);
  const translate = useTranslations("way-section");
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <Button onClick={() => setIsModalShown(true)}>
          {translate("button")}
        </Button>
      </div>
      {modalShown && <Modal setIsShown={setIsModalShown} />}
    </>
  );
};

export default Action;

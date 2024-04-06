"use client";
import React, { FC, useState } from "react";
import Button from "@/src/shared/Button";
import Modal from "@/src/shared/Modal";
import { useTranslations } from "next-intl";

const Action: FC = () => {
  const [modalShown, setIsModalShown] = useState<boolean>(false);
  const translate = useTranslations("primary-section");
  return (
    <>
      <div className="flex flex-col items-center">
        <Button onClick={() => setIsModalShown(true)}>
          {translate("button")}
        </Button>
      </div>
      {modalShown && <Modal setIsShown={setIsModalShown} />}
    </>
  );
};

export default Action;

"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Button } from "~/components/ui/button";

import React from 'react';

interface PopupProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
  logo: React.ReactNode;
  submitText: string;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const Popup: React.FC<PopupProps> = ({ trigger, title, description, content, logo, submitText, onSubmit }) => {

  return (
    <Drawer open>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent className="h-3/5">
        <div className="mx-auto w-full max-w-sm h-full">
          <DrawerHeader>
            <DrawerTitle className="flex items-stretch">
              <div>
                {title}
              </div>
              <div className="pl-2">
                {logo}
              </div>
            </DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            {content}
          </div>
          <DrawerFooter>
            <Button onClick={onSubmit}>{submitText}</Button>
            <DrawerClose>
              <Button variant="outline" className="w-1/4 h-10">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default Popup;

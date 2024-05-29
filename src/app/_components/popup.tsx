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

{/* <div>
{title}
</div>
<div className="pl-2">
{logo}
</div> */}

{/* <div className="p-4">
{content}
</div> */}

            // {/* just pass down the content?? */}
            // <Button onClick={onSubmit}>{submitText}</Button>

interface PopupProps {
  triggerContent: React.ReactNode;
  headerContent: React.ReactNode;
  descriptionContent: React.ReactNode;
  mainContent: React.ReactNode;
  submitContent: React.ReactNode;
}

const Popup: React.FC<PopupProps> = 
  ({ triggerContent, headerContent, descriptionContent, mainContent, submitContent }) => {

  return (
    <Drawer>
      <DrawerTrigger>
        {triggerContent}
      </DrawerTrigger>
      <DrawerContent className="h-3/5">
        <div className="mx-auto w-full max-w-sm h-full">
          <DrawerHeader>
            <DrawerTitle>
              {headerContent}
            </DrawerTitle>
            <DrawerDescription>
              {descriptionContent}
            </DrawerDescription>
          </DrawerHeader>
            {mainContent}
          <DrawerFooter>
            {submitContent}
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

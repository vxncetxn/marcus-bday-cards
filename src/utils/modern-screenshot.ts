import workerUrl from "modern-screenshot/worker?url";
import type { Context } from "modern-screenshot";
import { createContext as createContextBase } from "modern-screenshot";

export const createContext = async () => {
  const baseElem = document.getElementById("exhibit-0");

  if (baseElem) {
    const context = await createContextBase(baseElem, {
      workerUrl,
      workerNumber: 1,
      quality: 1,
      scale: window.devicePixelRatio || 1,
      style: {
        contentVisibility: "visible",
      },
      width: 0,
      height: 0,
    });

    return context;
  }
};

export const updateContext = (context: Context<Node>, node: Node) => {
  context.node = node;
  context.width = window.innerWidth;
  context.height = window.innerHeight;

  return context;
};

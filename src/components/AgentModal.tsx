"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Agent {
  name: string;
  role: string;
  desc: string;
  image: string;
}

interface AgentModalProps {
  agent: Agent | null;
  onClose: () => void;
}

export function AgentModal({ agent, onClose }: AgentModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (agent) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [agent]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!agent) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-[100] m-auto max-w-md w-[calc(100%-32px)] rounded-2xl bg-white shadow-2xl border border-purple-15 p-0 backdrop:bg-purple-9/50 backdrop:backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="p-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center hover:bg-purple-05 transition-colors text-purple-6"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-5 h-5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-purple-05 overflow-hidden shrink-0">
            <Image
              src={agent.image}
              alt={agent.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-purple-9">
              {agent.name}
            </h3>
            <p className="text-sm text-purple-6">{agent.role}</p>
          </div>
        </div>
        <p className="text-[15px] text-purple-7 leading-relaxed">
          {agent.desc}
        </p>
      </div>
    </dialog>
  );
}

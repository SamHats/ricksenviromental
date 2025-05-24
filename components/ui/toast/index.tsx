"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ToastProps {
  title: string;
  description?: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type = "info",
  duration = 5000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Allow time for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    info: "bg-blue-100 border-blue-500 text-blue-800",
  }[type];

  return (
    <div
      className={`fixed top-20 right-4 max-w-sm w-full p-4 rounded-md border-l-4 shadow-md transition-opacity duration-300 ${bgColor} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="alert">
      <div className="flex items-start">
        <div className="flex-1">
          <p className="font-medium">{title}</p>
          {description && (
            <p className="mt-1 text-sm opacity-90">{description}</p>
          )}
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="ml-4 inline-flex text-gray-700 hover:text-gray-900 focus:outline-none">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toast;

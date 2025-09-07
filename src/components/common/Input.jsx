// src/components/common/Input.jsx
import React from "react";

/**
 * Reusable Input component
 *
 * Props:
 * - type: string - Input type (default: "text")
 * - label: string - Optional label above input
 * - error: string - Optional error message
 * - className: string - Additional classes for input
 * - wrapperClassName: string - Classes for the outer wrapper
 * - ...props: any - Other input props (placeholder, value, onChange, etc.)
 */
export const Input = React.forwardRef(
  (
    {
      type = "text",
      label,
      error,
      className = "",
      wrapperClassName = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col ${wrapperClassName}`}>
        {label && (
          <label className="mb-1 text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400
            ${
              error
                ? "border-red-500 focus:ring-red-400 focus:border-red-500"
                : "border-gray-300"
            }
            ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

// Default export
export default Input;

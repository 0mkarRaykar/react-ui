// src/components/common/Card.jsx
import React from "react";

/**
 * Reusable Card component
 *
 * Props:
 * - title: string - Card title
 * - subtitle: string - Card subtitle
 * - children: ReactNode - Card content
 * - footer: ReactNode - Card footer content
 * - className: string - Additional classes for the main container
 * - headerClassName: string - Additional classes for the header
 * - bodyClassName: string - Additional classes for the body
 */
const Card = ({
  title,
  subtitle,
  children,
  className = "",
  headerClassName = "",
  bodyClassName = "",
  footer,
  ...props
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-2xl p-4 transition-transform hover:scale-[1.01] ${className}`}
      {...props}
    >
      {(title || subtitle) && (
        <div className={`mb-4 ${headerClassName}`}>
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}

      <div className={`mb-4 ${bodyClassName}`}>{children}</div>

      {footer && <div className="pt-2 border-t border-gray-200">{footer}</div>}
    </div>
  );
};

// Named export
export { Card };

// Default export
export default Card;

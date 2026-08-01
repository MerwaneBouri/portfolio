"use client";

import { useState } from "react";

interface CopyEmailButtonProps {
  email: string;
}

const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setError(null);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setError("Impossible de copier l'email.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleCopy}
        className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      >
        {copied ? "Email copié" : "Copier l'email"}
      </button>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
};

export default CopyEmailButton;

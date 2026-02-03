"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--foreground)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2.5rem",
                height: "2.5rem",
            }}
            title="Toggle Theme"
        >
            {theme === "dark" ? "🌞" : "🌙"}
        </button>
    );
}

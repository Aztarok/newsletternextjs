"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EmailTransfer = () => {
    const [email, setEmail] = useState("");
    const router = useRouter();

    useEffect(() => {
        const storedValue = localStorage.getItem("sharedValue");
        if (storedValue) {
            setEmail(storedValue);
        }
    }, []);
    return (
        <div className="text-charcoalGray flex flex-col gap-5">
                       {" "}
            <img
                className="sm:pt-0 pt-32"
                src="/nextjs-github-pages/icon-list.svg"
                width={50}
                alt="checkmark"
            />
                       {" "}
            <span className="text-darkSlateGray text-4xl font-bold">
                Thanks for subscribing!
            </span>
                       {" "}
            <p className="font-semibold">
                A confirmation email has been sent to{" "}
                <span className="text-darkSlateGray font-bold">{email}</span>.
                Please open it and click the button instide to confirm your
                subscription.
            </p>
                       {" "}
            <button
                onClick={() => router.push("/")}
                className="mt-auto font-semibold p-3 sm:mt-3 rounded-lg text-whiteBetter bg-darkSlateGray relative overflow-hidden bg-gradient-to-r hover:from-pink-500 hover:via-pink-400 hover:to-orange-500 hover:text-whiteBetter transition duration-300"
            >
                Dismiss message
            </button>
                   {" "}
        </div>
    );
};

export default EmailTransfer;

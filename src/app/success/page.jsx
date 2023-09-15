import EmailTransfer from "@/components/EmailTransfer";
import React from "react";

const page = () => {
    return (
        <main className="flex bg-darkSlateGray min-h-0 sm:min-h-screen w-full justify-center items-center">
            <div className="flex bg-whiteBetter mx-auto min-h-screen sm:min-h-0 sm:max-w-[50%] md:max-w-[30rem] lg:max-w-[30rem] rounded-xl p-10">
                <EmailTransfer />
            </div>
        </main>
    );
};

export default page;
// "static": "next build && touch ./out/.nojekyll && echo 'https://www.aztarok.github.io/newletternextjs' > .out/CNAME",

"use client";

import { ReactNode } from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import Footer from "./footer";
import Social from "./soical";
interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonUrl: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonUrl,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>

      {children}
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <Footer label={backButtonLabel} url={backButtonUrl} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;

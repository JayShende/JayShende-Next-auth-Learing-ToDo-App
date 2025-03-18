"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import Footer from "./footer";
import Social from "./soical";
interface CardWrapperProps {
  children: ReactNode;
  topText:string,
  headerLabel: string;
  backButtonLabel: string;
  backButtonUrl: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  topText,
  headerLabel,
  backButtonLabel,
  backButtonUrl,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} topText={topText} />
      </CardHeader>

      <CardContent>
      {children}
      </CardContent>
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

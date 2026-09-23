"use client";

import Link, { LinkProps } from "next/link";
import { Button, ButtonProps } from "./button";
import { ExternalLinkIcon } from "lucide-react";

type LinkOptions = Pick<LinkProps, "replace" | "scroll" | "prefetch">;

interface ButtonOnlyProps extends ButtonProps {
  href?: undefined;
}

interface LinkButtonProps extends ButtonProps, LinkOptions {
  href: string;
}

export type ReferenceButtonProps = (ButtonOnlyProps | LinkButtonProps) & {
  icon?: React.ReactNode;
};

export function ReferenceButton(props: ReferenceButtonProps) {
  if (props.href === undefined) {
    const { href, variant = "ghost", size = "icon", icon, ...buttonProps } = props;
    return <Button variant={variant} size={size} {...buttonProps} disabled />;
  }

  const { href, replace, scroll, prefetch, variant = "ghost", size = "icon", icon, children, ...buttonProps } = props;

  return (
    <Button
      variant={variant}
      size={size}
      nativeButton={false}
      render={<Link href={href} replace={replace} scroll={scroll} prefetch={prefetch} />}
      {...buttonProps}>
      <div>
        {icon ?? <ExternalLinkIcon />}
        {!size?.includes("icon") && props.children}
      </div>
    </Button>
  );
}

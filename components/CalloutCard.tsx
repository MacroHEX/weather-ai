"use client"
// ::: libraries
//
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";

// ::: types
//
type Props = {
  message: string;
  warning?: boolean;
};

const CalloutCard = ({ message, warning }: Props) => {
  return (
    <Callout
      className="mt-4"
      title={message}
      icon={warning ? ExclamationIcon : CheckCircleIcon}
      color={warning ? "rose" : "teal"}
    />
  );
};

export default CalloutCard;

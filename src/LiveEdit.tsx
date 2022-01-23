// https://github.com/FormidableLabs/react-live
import * as React from "react";
import { Box } from "@twilio-paste/core";
import { PrismTheme } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const CodeblockTheme: PrismTheme = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(199, 146, 234)"
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)"
      }
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "rgb(127, 219, 202)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)"
      }
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    }
  ]
};

interface Props {
  code: string;
  scope: {};
}

const LiveEdit: React.FC<Props> = ({ code, scope }) => {
  return (
    <Box
      borderStyle="solid"
      borderWidth="borderWidth20"
      borderRadius="borderRadius20"
      borderColor="colorBorder"
      marginBottom="space110"
    >
      <LiveProvider
        code={code}
        language="jsx"
        theme={CodeblockTheme}
        scope={scope}
      >
        <Box
          paddingLeft="space50"
          paddingRight="space50"
          paddingTop="space40"
          paddingBottom="space40"
          backgroundColor="colorBackgroundBody"
          borderTopLeftRadius="borderRadius20"
          borderTopRightRadius="borderRadius20"
        >
          <LivePreview />
        </Box>
        <Box
          css={{ padding: "2px 10px", backgroundColor: "#011627" }}
          borderBottomLeftRadius="borderRadius20"
          borderBottomRightRadius="borderRadius20"
        >
          <LiveEditor />
        </Box>
        <LiveError />
      </LiveProvider>
    </Box>
  );
};

export { LiveEdit };

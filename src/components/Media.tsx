import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [
    {
      title: "代码",
      linkText: "Github",
      link: "https://github.com/BajaXX/Polaris",
    },
    {
      title: "开发者",
      linkText: "@bajaSX",
      link: "https://twitter.com/bajasx",
    },
    // {
    //   title: "Alpha",
    //   linkText: "@ChaunceyCrypto",
    //   link: "https://twitter.com/ChaunceyCrypto",
    // },
  ];

  return (
    <div className=" py-4">
      <div className=" flex items-center justify-center gap-x-4 max-sm:flex-col">
        {mediaList.map(({ title, linkText, link }) => {
          return (
            <div
              key={title}
              className=" flex items-center gap-2 text-xl"
            >
              <span>{title}:</span>
              <Box
                component={Link}
                href={link}
                className=" hover:underline"
                sx={{
                  color: "primary.main",
                }}
              >
                {linkText}
              </Box>
            </div>
          );
        })}
      </div>

      <div className=" text-center">
        打赏地址☕️: 0xfc6Aa6eDbA70F83070e6f1f5112623e4e7B8d099
      </div>
    </div>
  );
}

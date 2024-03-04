import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef("null");

  const data = [
    {
      desc: "This is just a description of cards and i want to print this on my web page. Btw how are you? is everything ok?.",
      file_size: ".12mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. Btw how are you? is everything othis on my web page. Btw how are you? is everything ok?.",
      file_size: ".12mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. Btw how are you? is everything ok?.",
      file_size: ".12mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. Btw how are you? is everything ok? web page. I dont know what should i do for getting the better post..",
      file_size: ".12mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. Btw how are you? is everything ok?.",
      file_size: ".12mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. Btw how are you? is everything ok?.",
      file_size: ".12mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. Btw how are you? is everything ok?.",
      file_size: ".12mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },

    {
      desc: "This is just a description of cards and i want to print this on my web page. Btw how are you? is everything ok?.",
      file_size: ".2mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. I dont know what should i do for getting the better post.This is just a descript eb page. I dont know what should i do for getting the better post.",
      file_size: ".9mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on web page. I dont know what should i do for getting the better post. my web page. I dont know what should i do for getting the better post.",
      file_size: ".9mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. I dont know what should i do for getting the better post. web page. I dont know what should i do for getting the better post.",
      file_size: ".9mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. I dont know what should i do for   web page. I dont know what should i do for getting the better post. the better post.",
      file_size: ".9mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my web page. I dont know what should i do for getting the better post.",
      file_size: ".9mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on my  web page. I dont know what should i do for getting the better post. web page. I dont know what should i do for getting the better post.",
      file_size: ".9mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
    {
      desc: "This is just a description of cards and i want to print this on  web page. I dont know what should i do for getting the better post. my web page. I dont know what should i do for getting the better post.",
      file_size: ".9mb",
      tag: {
        TagTitle: "Download Now",
        TagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className=" top-0 left-0 z-[3] w-full  flex gap-4  flex-wrap justify-center"
    >
      {data.map((items) => (
        <Card value={items} reference={ref} />
      ))}
    </div>
  );
}
export default Foreground;

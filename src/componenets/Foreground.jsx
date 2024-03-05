import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef("null");

  const data = [
    {
      quote:
        "Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.",
      writer: "Carl Sagan",
    },
    {
      quote:
        "For small creatures such as we the vastness is bearable only through love.",
      writer: "Carl Sagan",
    },
    {
      quote:
        "There’s as many atoms in a single molecule of your DNA as there are stars in the typical galaxy. We are, each of us, a little universe.",
      writer: "Carl Sagan",
    },
    {
      quote:
        "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.",
      writer: "Carl Sagan",
    },
    {
      quote:
        "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
      writer: "Richard P. Feynman",
    },
    {
      quote:
        "We are at the very beginning of time for the human race. It is not unreasonable that we grapple with problems. But there are tens of thousands of years in the future. Our responsibility is to do what we can, learn what we can, improve the solutions, and pass them on.",
      writer: "Richard P. Feynman",
    },
    {
      quote:
        "What do I advise? Forget it all. Don't be afraid. Do what you get the most pleasure from. Is it to build a cloud chamber? Then go on doing things like that. Develop your talents wherever they may lead. Damn the torpedoes - full speed ahead!",
      writer: "Richard P. Feynman",
    },
    {
      quote:
        "Why make yourself miserable saying things like, 'Why do we have such bad luck? What has God done to us? What have we done to deserve this?'- all of which, if you understand reality and take it completely into your heart, are irrelevant and unsolvable. They are just things that nobody can know. Your situation is just an accident of life.",
      writer: "Richard P. Feynman",
    },
    {
      quote:
        "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at. It matters that you don’t just give up.",
      writer: "Stephen Hawking",
    },
    {
      quote:
        "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the universe. That makes us something very special.",
      writer: "Stephen Hawking",
    },
    {
      quote:
        "For millions of years, mankind lived just like the animals. Then something happened which unleashed the power of our imagination. We learned to talk and we learned to listen. Speech has allowed the communication of ideas, enabling human beings to work together to build the impossible. Mankind’s greatest achievements have come about by talking, and its greatest failures by not talking. It doesn’t have to be like this. Our greatest hopes could become reality in the future. ",
      writer: "Stephen Hawking",
    },
    {
      quote:
        "Success in creating AI would be the biggest event in human history. Unfortunately, it might also be the last, unless we learn how to avoid the risks.",
      writer: "Stephen Hawking",
    },
    {
      quote:
        "The human brain has 100 billion neurons, each neuron connected to 10 thousand other neurons. Sitting on your shoulders is the most complicated object in the known universe.",
      writer: "Michio Kaku",
    },
    {
      quote:
        "What we usually consider as impossible are simply engineering problems... there's no law of physics preventing them.",
      writer: "Michio Kaku",
    },
    {
      quote:
        "You can mass-produce hardware; you cannot mass-produce software - you cannot mass-produce the human mind..",
      writer: "Michio Kaku",
    },
    {
      quote:
        "When we're born, we want to know why the stars shine. We want to know why the sun rises.",
      writer: "Michio Kaku",
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

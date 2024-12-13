// 20.2 Code StatsItem.tsx
import CountUp from "react-countup";

interface IProp {
  endCountNum: number;
  endCoutText: string;
  text: string;
}

const StatsItem = ({ endCountNum, endCoutText, text }: IProp) => {
  return (
    <div className="flex xl:flex-1 flex-col items-center text-center">
      <div className="font-primary text-primary text-4xl xl:text-5xl leading-none">
        <CountUp end={endCountNum} delay={1} duration={4} />
        <span>{endCoutText}</span>
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default StatsItem;

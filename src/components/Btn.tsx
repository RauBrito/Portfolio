import { baseAnim } from "./animations";

export const Btn = ({ text = "" }: { text?: string }) => {
  return (
    <div
      className={
        st_btn +
        baseAnim +
        ` hover:bg-neutral-900 text-neutral-900 hover:text-red-100 border-neutral-900`
      }
    >
      <p
        style={{ fontFamily: "MatrixMono" }}
        className="text-[8px] text-center"
      >
        {text}
      </p>
      <Corners />
    </div>
  );
};

export const BtnV2 = ({ text }: { text: string }) => {
  return (
    <div
      className={
        st_btn +
        baseAnim +
        `border-red-100 hover:border-red-100 bg-red-100 hover:bg-neutral-900 text-neutral-900 hover:text-red-100 min-w-[160px]`
      }
    >
      <p
        style={{ fontFamily: "MatrixMono" }}
        className="text-[8px] text-center"
      >
        {text}
      </p>
      <Corners color='bg-neutral-900' />
    </div>
  );
};

const Corners = ({ color = "bg-red-100" }) => {
  const st = `absolute size-1 ${color} `;
  return (
    <>
      <div className={st + "-top-1 -left-1"} />
      <div className={st + "-top-1 -right-1"} />
      <div className={st + "-bottom-1 -left-1"} />
      <div className={st + "-bottom-1 -right-1"} />
    </>
  );
};

const st_btn =
  "border-2 relative px-3 py-2 cursor-pointer min-w-[100px] max-w-[160px] ";

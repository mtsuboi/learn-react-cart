import React, { ChangeEvent, useState } from 'react';

type Props = {
  value: number;
  unitStr: string;
  setValue: (value: number) => void;
};

export const NumberInput: React.FC<Props> = (props) => {
  console.log('NumberInput');
  const { value, unitStr, setValue } = props;
  const [isBlank, setIsBlank] = useState(false);

  // +/-クリック時のカウントアップ・ダウン
  const onClickCount = (addValue: number) => {
    setIsBlank(false);
    const newValue = value + addValue;
    if (newValue >= 0 && newValue <= 9) setValue(newValue);
  };

  // onChangeで空文字判定と親の値を更新
  const onLocalValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsBlank(e.target.value === '');
    if (e.target.value === '') setValue(0);
    if (/^\d$/.test(e.target.value)) setValue(parseInt(e.target.value));
  };

  return (
    <>
      <button
        className="text-white bg-indigo-500 border-0 px-1 focus:outline-none hover:bg-indigo-600 rounded"
        onClick={() => onClickCount(-1)}
      >
        －
      </button>
      <div className="inline-block px-2.5">
        <input
          type="text"
          className="w-8 px-2 rounded border border-gray-300 focus:ring-2"
          value={isBlank ? '' : value.toString()}
          onChange={onLocalValueChange}
        />
        {unitStr}
      </div>
      <button
        className="text-white bg-indigo-500 border-0 px-1 focus:outline-none hover:bg-indigo-600 rounded"
        onClick={() => onClickCount(1)}
      >
        ＋
      </button>
    </>
  );
};

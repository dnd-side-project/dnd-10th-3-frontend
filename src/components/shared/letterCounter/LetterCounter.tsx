type Props = { maxCount: number; letters: string };

const LetterCounter = ({ letters, maxCount }: Props) => {
  return (
    <div>
      <span className="text-sm text-gray-600">{letters.length}</span>
      <span className="text-sm text-gray-400">/{maxCount}</span>
    </div>
  );
};

export default LetterCounter;

type Props = { maxLength: number; targetString: string };

const CharCounter = ({ targetString, maxLength }: Props) => {
  return (
    <div>
      <span className="text-sm text-gray-600">{targetString.length}</span>
      <span className="text-sm text-gray-400">/{maxLength}</span>
    </div>
  );
};

export default CharCounter;

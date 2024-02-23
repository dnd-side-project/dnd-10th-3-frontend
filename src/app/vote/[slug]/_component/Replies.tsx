import { Reply } from '@/components/features/vote';
import { Notice, ReplyInput } from '@/components/shared';
import { Typography } from '@/foundations/typography';

type Props = {
  voteId: number;
};

const Replies = ({}: Props) => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between px-2xs py-3xs">
        <Typography>댓글 3</Typography>

        <div className="flex gap-4xs">
          <Typography>최신순</Typography>
          <Typography>공감순</Typography>
        </div>
      </div>

      <Notice text="댓글을 사용할 때는 타인을 존중해야합니다." />

      <div className="flex flex-col px-2xs py-3xs">
        <Reply
          id={1}
          nickname="옹기종기"
          createdAt={'10분전'} // TODO: timestamp
          content="트위드 원피스가 화사하고 예뻐요! 혹시 옷 정보 어딘지 알 수 있을까요?"
          likes={4}
          status={false}
        />
        <Reply
          id={1}
          nickname="옹기종기"
          createdAt={'10분전'} // TODO: timestamp
          content="저도 트위드 원피스가 날 것 같아요! 정보 부탁드려요~"
          likes={10}
          status={true}
        />
        <Reply
          id={1}
          nickname="옹기종기"
          createdAt={'10분전'} // TODO: timestamp
          content="저는 두 번째 원피스가 예쁘네요!"
          likes={0}
          status={false}
        />
      </div>

      <ReplyInput />
    </section>
  );
};

export default Replies;

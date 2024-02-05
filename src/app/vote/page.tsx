import { Avatar } from '@/components/common/avatar';
import { Button } from '@/components/common/button';
import { Icon } from '@/components/common/icon';
import { Input } from '@/components/common/input';
import { Tag } from '@/components/common/tag';
import { Header } from '@/components/layout/header';
import { Typography } from '@/foundations/typography';

const VotePage = () => {
  return (
    <main className={'relative flex size-full flex-col px-4 pb-10'}>
      <Header>
        <Header.Logo />
        <Header.Tab />
        <Header.IconLink href="/my-page" icon="user" />
      </Header>

      {/* <카테고리 탭/> */}
      <div className="p-xs">
        <Typography type={'heading1'}>
          결혼식 참석시 <br /> 고민이었던 부분을 나눠보세요.
        </Typography>
        {/* searchInput 구현하여 수정해야한다*/}
        <div className="py-4xs">
          <Input placeholder="무엇이 고민이신가요?" />
        </div>
      </div>
      <div className="w-full px-xs">
        <div
          className="  flex flex-col gap-4xs rounded-[16px] border border-gray-100 p-3xs shadow-thumb "
          id="container"
        >
          {/* voteCardHeader */}
          <div id="header" className="flex items-center justify-between">
            <Tag>진행중</Tag>
            <Typography type={'body3'} className="text-gray-300">
              D-1
            </Typography>
          </div>
          {/* voteCardContent */}
          <div id="content" className="relative flex flex-col gap-5xs">
            <Typography type={'heading3'} className="text-gray-700">
              갑자기 연락 온 동창 축의금 얼마할까요? 고민됩니다.
            </Typography>
            <Typography type={'body3'} className="text-gray-400">
              제목 그대로 학창시절 조금 친했던 친구였는데요. 서로 연락 안하고 지내다가 최근에 연락이
              되었어요. 옛날...
            </Typography>
            <Button variant={'secondary'} width={'full'}>
              텍스트를 입력해주세요
            </Button>
            <Button variant={'secondary'} width={'full'}>
              텍스트를 입력해주세요
            </Button>

            <div
              className={`absolute bottom-0 left-0 z-10 h-[50%] w-full bg-gradient-to-t from-white`}
            />
          </div>

          {/* voteCardFooter */}
          <div id="footer" className="flex flex-col items-center justify-between gap-4xs">
            <Button width={'full'} className="bg-primary-200 text-primary-700">
              투표 참여하기
            </Button>
            <div className="flex w-full justify-between gap-4xs">
              <div className="flex items-center gap-6xs">
                <div className="flex items-center gap-6xs">
                  <Icon icon="filledHeart" size={13} />
                  <Typography type={'body3'} className="text-gray-400">
                    123
                  </Typography>
                </div>
                <div className="flex w-full items-center gap-6xs">
                  <Icon icon="reply" size={13} />
                  <Typography type={'body3'} className="text-gray-400">
                    32
                  </Typography>
                </div>
              </div>
              <div className="flex items-center">
                <Avatar />
                <Typography type={'body3'} className="text-gray-400">
                  1명 참여중
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div
          className="  flex flex-col gap-4xs rounded-[16px] border border-gray-100 p-3xs shadow-thumb "
          id="container"
        >
          {/* voteCardHeader */}
          <div id="header" className="flex items-center justify-between">
            <Tag>진행중</Tag>
            <Typography type={'body3'} className="text-gray-300">
              D-1
            </Typography>
          </div>
          {/* voteCardContent */}
          <div id="content" className="relative flex flex-col gap-5xs">
            <Typography type={'heading3'} className="text-gray-700">
              갑자기 연락 온 동창 축의금 얼마할까요? 고민됩니다.
            </Typography>
            <Typography type={'body3'} className="text-gray-400">
              제목 그대로 학창시절 조금 친했던 친구였는데요. 서로 연락 안하고 지내다가 최근에 연락이
              되었어요. 옛날...
            </Typography>
            <Button variant={'secondary'} width={'full'}>
              텍스트를 입력해주세요
            </Button>
            <Button variant={'secondary'} width={'full'}>
              텍스트를 입력해주세요
            </Button>

            <div
              className={`absolute bottom-0 left-0 z-10 h-[50%] w-full bg-gradient-to-t from-white`}
            />
          </div>

          {/* voteCardFooter */}
          <div id="footer" className="flex flex-col items-center justify-between gap-4xs">
            <Button width={'full'} className="bg-primary-200 text-primary-700">
              투표 참여하기
            </Button>
            <div className="flex w-full justify-between gap-4xs">
              <div className="flex items-center gap-6xs">
                <div className="flex items-center gap-6xs">
                  <Icon icon="filledHeart" size={13} />
                  <Typography type={'body3'} className="text-gray-400">
                    123
                  </Typography>
                </div>
                <div className="flex w-full items-center gap-6xs">
                  <Icon icon="reply" size={13} />
                  <Typography type={'body3'} className="text-gray-400">
                    32
                  </Typography>
                </div>
              </div>
              <div className="flex items-center">
                <Avatar />
                <Typography type={'body3'} className="text-gray-400">
                  1명 참여중
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FloatButton*/}
      <div className="fixed bottom-5xl right-xs z-20">
        <Button
          icon="add"
          iconOnly
          className="h-[56px] w-xl rounded-[100%] bg-primary-500"
          iconColor="white"
        />
      </div>
    </main>
  );
};

export default VotePage;

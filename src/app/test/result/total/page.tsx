import { Header } from '@/components/layout/header';
import { RESULT_TYPE_LIST } from '@/constants/result/total';
import { Typography } from '@/foundations/typography';

const TotalPage = () => {
  return (
    <>
      <Header className="bg-white shadow-thumb">
        <Header.Previous />
        <Header.Text text="전체유형" />

        <Header.Text text=" " />
      </Header>

      <section className="pb-10">
        {RESULT_TYPE_LIST.map((resultType) => {
          return (
            <article className="my-4xs flex w-full px-2xs" key={resultType.id}>
              <div className="flex w-full items-center rounded-xl border border-gray-100 p-3xs">
                <div className="flex w-full items-center justify-center">
                  <Typography type="heading2" className="pr-xs 390:pr-3xs">
                    {resultType.id + 1}
                  </Typography>
                  <div className="flex w-full flex-1 justify-between">
                    <div className="flex flex-col gap-4xs">
                      <div>
                        <Typography type="heading3">{resultType.text.firstLine}</Typography>
                        <Typography type="heading3" className="text-primary-800">
                          {resultType.text.secondLine}
                        </Typography>
                      </div>
                      <div>
                        <Typography type="body3" className="text-gray-500">
                          {resultType.text.firstHash}
                        </Typography>
                        <Typography type="body3" className="text-gray-500">
                          {resultType.text.secondHash}
                        </Typography>
                      </div>
                    </div>

                    {resultType.image}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default TotalPage;

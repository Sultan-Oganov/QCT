import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { observer, useGlobalQueryParams, useModel } from '@qctoken/store';
import { makeBC, mapComponentOne, mapComponents } from '@qctoken/register';
import type { ClassProps } from '@qctoken/register/lib/types';
import type { CarouselNameType } from './types';
import { useStyles } from './Carousel.styles';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { CarouselModel } from './CarouselModel';

export function CarouselBase(props: ClassProps<CarouselNameType>) {
  const { bc, pageStore } = props;
  const styles = useStyles(bc);
  const [store] = useModel(CarouselModel, props);
  useGlobalQueryParams(store, pageStore);

  if (store.requestStore.isLoading) {
    return (
      <>
        {mapComponentOne(
          makeBC('QCT.STATIC.LOADER', {
            pageObjectId: 'loader',
            objectId: 'loader',
            // @ts-ignore
            color: bc.loaderColor,
            size: 50,
          }),
          props,
        )}
      </>
    );
  }

  if (store.records.length === 0 && bc.notFoundChilds) {
    return <>{mapComponents(bc.notFoundChilds, props)}</>;
  }

  return (
    <div css={styles.root}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={bc.spaceBetween}
        modules={[Navigation]}
        navigation={bc.showArrow}
        loop={bc.loop}
      >
        {store.records.length > 0 && bc.query
          ? store.records.map((record, i) => (
              <SwiperSlide key={record.id ?? i + Math.random()}>
                {mapComponents(bc.childs, {
                  ...props,
                  values: record,
                })}
              </SwiperSlide>
            ))
          : bc.childs.map((child, i) => (
              <SwiperSlide key={i}>{mapComponentOne(child, props)}</SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
export const Carousel = observer(CarouselBase);
